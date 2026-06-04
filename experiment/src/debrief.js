import {
  Chart,
  LinearScale,
  LineController,
  LineElement,
  ScatterController,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
import HtmlButtonResponsePlugin from "@jspsych/plugin-html-button-response";

Chart.register(LinearScale, LineController, LineElement, ScatterController, PointElement, Legend, Tooltip);

// Strips trailing punctuation from a word and returns its character length.
export function wordLength(word) {
  return word.replace(/[.,!?;:]+$/, "").length;
}

// Extracts per-word observations from passage maze trials.
// Returns array of { length, rt, correct } objects.
export function extractWordData(trialData) {
  const obs = [];
  for (const trial of trialData) {
    if (trial.trial_type !== "maze" || trial.passage == null) continue;
    for (let i = 0; i < trial.words.length; i++) {
      obs.push({
        length: wordLength(trial.words[i]),
        rt: trial.rt[i],
        correct: trial.correct[i] === 1,
      });
    }
  }
  return obs;
}

// Computes summary stats from jsPsych data values.
// Returns { pctCorrect, byLength } where byLength is a Map<number, {correctRts, incorrectRts}>.
export function computeStats(trialData) {
  const obs = extractWordData(trialData);
  if (obs.length === 0) return { pctCorrect: 0, byLength: new Map() };

  const nCorrect = obs.filter((o) => o.correct).length;
  const pctCorrect = nCorrect / obs.length;

  const byLength = new Map();
  for (const o of obs) {
    if (!byLength.has(o.length)) {
      byLength.set(o.length, { correctRts: [], incorrectRts: [] });
    }
    const bucket = byLength.get(o.length);
    if (o.correct) {
      bucket.correctRts.push(o.rt);
    } else {
      bucket.incorrectRts.push(o.rt);
    }
  }

  return { pctCorrect, byLength };
}

function mean(arr) {
  if (arr.length === 0) return null;
  return arr.reduce((s, v) => s + v, 0) / arr.length;
}

// Fits a line y = slope*x + intercept to an array of {x, y} points.
// Returns null if fewer than 2 points.
export function linearRegression(points) {
  if (points.length < 2) return null;
  const n = points.length;
  const sumX  = points.reduce((s, p) => s + p.x, 0);
  const sumY  = points.reduce((s, p) => s + p.y, 0);
  const sumXY = points.reduce((s, p) => s + p.x * p.y, 0);
  const sumX2 = points.reduce((s, p) => s + p.x * p.x, 0);
  const slope     = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;
  return { slope, intercept };
}

// Returns the HTML string for the debrief screen (text + canvas placeholder).
export function debriefHtml(stats) {
  const pct = Math.round(stats.pctCorrect * 100);
  return (
    `<h2>Thanks for reading!</h2>` +
    `<p>You got <b>${pct}%</b> of words right on the first try — nice work!</p>` +
    `<p>Often people take longer to read longer words. ` +
    `Was that true for you? </p>` +
    `<div class="chart-container"><canvas id="debrief-chart"></canvas></div>`
  );
}

function renderDebriefChart(ctx, stats) {
  const lengths = Array.from(stats.byLength.keys()).sort((a, b) => a - b);

  // Returns {data, radii} — one point per length with dot size ∝ sqrt(n).
  const toPointsAndRadii = (getRts) => {
    const data = [];
    const radii = [];
    for (const l of lengths) {
      const rts = getRts(l).filter((rt) => rt <= 10000).map((rt) => rt / 1000);
      const m = mean(rts);
      if (m !== null) {
        data.push({ x: l, y: m });
        radii.push(Math.max(5, Math.sqrt(rts.length) * 4));
      }
    }
    return { data, radii };
  };

  const correct   = toPointsAndRadii((l) => stats.byLength.get(l).correctRts);
  const incorrect = toPointsAndRadii((l) => stats.byLength.get(l).incorrectRts);

  const trend = linearRegression(correct.data);
  const trendDataset = [];
  if (trend && correct.data.length >= 2) {
    const xs = correct.data.map((p) => p.x);
    const xMin = Math.min(...xs);
    const xMax = Math.max(...xs);
    trendDataset.push({
      label: "",
      type: "line",
      data: [
        { x: xMin, y: trend.slope * xMin + trend.intercept },
        { x: xMax, y: trend.slope * xMax + trend.intercept },
      ],
      borderColor: "rgba(50, 180, 80, 0.55)",
      borderWidth: 2.5,
      pointRadius: 0,
      fill: false,
    });
  }

  new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Got it right away",
          data: correct.data,
          backgroundColor: "rgba(50, 180, 80, 0.9)",
          pointRadius: correct.radii,
          pointHoverRadius: correct.radii.map((r) => r + 2),
        },
        {
          label: "Had to try again",
          data: incorrect.data,
          backgroundColor: "rgba(230, 100, 50, 0.9)",
          pointRadius: incorrect.radii,
          pointHoverRadius: incorrect.radii.map((r) => r + 2),
        },
        ...trendDataset,
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "top",
          labels: { font: { size: 16 }, filter: (item) => item.text !== "" },
        },
        tooltip: { enabled: true },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: "Time (s)", font: { size: 15 } },
          ticks: { font: { size: 14 } },
        },
        x: {
          title: { display: true, text: "Word length (letters)", font: { size: 15 } },
          ticks: { stepSize: 1, font: { size: 14 } },
        },
      },
    },
  });
}

// Builds a debrief trial from pre-computed stats — useful for dev previews.
export function buildDebriefTrialFromStats(stats) {
  return {
    type: HtmlButtonResponsePlugin,
    stimulus: debriefHtml(stats),
    choices: ["Continue"],
    on_load: function () {
      const canvas = document.getElementById("debrief-chart");
      if (canvas) renderDebriefChart(canvas.getContext("2d"), stats);
    },
  };
}

// Builds a jsPsych debrief trial that computes stats from jsPsych data at runtime.
export function buildDebriefTrial(jsPsych) {
  return {
    type: HtmlButtonResponsePlugin,
    stimulus: function () {
      return debriefHtml(computeStats(jsPsych.data.get().values()));
    },
    choices: ["Continue"],
    on_load: function () {
      const stats = computeStats(jsPsych.data.get().values());
      const canvas = document.getElementById("debrief-chart");
      if (canvas) renderDebriefChart(canvas.getContext("2d"), stats);
    },
  };
}
