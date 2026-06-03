import {
  Chart,
  LinearScale,
  ScatterController,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
import HtmlButtonResponsePlugin from "@jspsych/plugin-html-button-response";

Chart.register(LinearScale, ScatterController, PointElement, Legend, Tooltip);

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

// Returns the HTML string for the debrief screen (text + canvas placeholder).
export function debriefHtml(stats) {
  const pct = Math.round(stats.pctCorrect * 100);
  return (
    `<h2>How did you do?</h2>` +
    `<p>You got <b>${pct}%</b> of words right on the first try — nice work!</p>` +
    `<p>Did you know that people usually take longer to read longer words? ` +
    `See if you can spot that pattern below!</p>` +
    `<canvas id="debrief-chart" style="max-width:100%;max-height:400px;"></canvas>`
  );
}

function renderDebriefChart(ctx, stats) {
  const lengths = Array.from(stats.byLength.keys()).sort((a, b) => a - b);

  const toPoints = (getRts) =>
    lengths
      .map((l) => ({ x: l, y: mean(getRts(l)) }))
      .filter((pt) => pt.y !== null);

  new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Got it right away",
          data: toPoints((l) => stats.byLength.get(l).correctRts),
          backgroundColor: "rgba(50, 180, 80, 0.9)",
          pointRadius: 8,
          pointHoverRadius: 10,
        },
        {
          label: "Had to try again",
          data: toPoints((l) => stats.byLength.get(l).incorrectRts),
          backgroundColor: "rgba(230, 100, 50, 0.9)",
          pointRadius: 8,
          pointHoverRadius: 10,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true, position: "top" },
        tooltip: { enabled: true },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: "Time (ms)" },
        },
        x: {
          title: { display: true, text: "Word length (letters)" },
          ticks: { stepSize: 1 },
        },
      },
    },
  });
}

// Builds a jsPsych debrief trial that shows % correct and an RT-by-word-length chart.
// Chart rendering runs in on_load after the stimulus HTML is in the DOM.
export function buildDebriefTrial(jsPsych) {
  return {
    type: HtmlButtonResponsePlugin,
    stimulus: function () {
      const stats = computeStats(jsPsych.data.get().values());
      return debriefHtml(stats);
    },
    choices: ["Finish"],
    on_load: function () {
      const stats = computeStats(jsPsych.data.get().values());
      const canvas = document.getElementById("debrief-chart");
      if (canvas) {
        renderDebriefChart(canvas.getContext("2d"), stats);
      }
    },
  };
}
