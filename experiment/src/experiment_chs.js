// CHS production entry point — build with build_chs.sh, not npm start.
// Differences from experiment.js:
//   - No SCSS import (CSS compiled separately by build_chs.sh)
//   - No PreloadPlugin (all images served from GitHub URLs)
//   - Runs as an IIFE; no jspsych-builder export async function run() wrapper
//   - on_finish hides chrome instead of calling displayData()

import { initJsPsych } from "jspsych";
import HtmlButtonResponsePlugin from "@jspsych/plugin-html-button-response";

import { passages, PRACTICE_SENTENCES } from "./stimuli.js";
import { shuffle } from "./helper.js";
import { INSTRUCTIONS, PRE_STORIES, BETWEEN_PASSAGES } from "./instructions.js";
import { buildPassageTimeline, buildPracticeTimeline } from "./timeline.js";
import { buildDebriefTrial, buildDebriefTrialFromStats, computeStats } from "./debrief.js";
import { buildExitSurvey, buildFinalPage } from "./survey.js";
import { createPauseButton, createStopButton } from "./controls.js";
import { buildConsentTimeline } from "./consent.js";

const SECTIONS = ["learn-how", "story-1", "story-2", "wrap-up"];

// Fake maze trial data for ?dev=debrief preview.
const DEV_FAKE_TRIALS = [
  { trial_type: "maze", passage: 1, sentence: 1,
    words: ["A", "it", "the", "cat", "runs", "quick", "slowly", "whenever"],
    rt:      [180, 210, 230, 280, 320, 410, 520, 610],
    correct: [1,   1,   1,   1,   1,   1,   1,   1] },
  { trial_type: "maze", passage: 1, sentence: 2,
    words: ["The", "big", "cat", "sat", "here", "often", "silently"],
    rt:      [200, 290, 310, 260, 350, 480, 590],
    correct: [1,   0,   1,   1,   0,   1,   1] },
  { trial_type: "maze", passage: 1, sentence: 3,
    words: ["An", "old", "dog", "runs", "fast", "toward", "something"],
    rt:      [190, 240, 270, 330, 380, 460, 560],
    correct: [1,   1,   1,   0,   1,   1,   1] },
  { trial_type: "maze", passage: 2, sentence: 1,
    words: ["She", "can", "jump", "quite", "really", "quickly", "whenever"],
    rt:      [220, 250, 310, 370, 420, 510, 620],
    correct: [1,   1,   1,   1,   1,   0,   1] },
];

function createProgressBar() {
  const labels = {
    "learn-how": "Learn how",
    "story-1": "Story 1",
    "story-2": "Story 2",
    "wrap-up": "Wrap-up",
  };
  const nav = document.createElement("nav");
  nav.id = "progress-bar";
  SECTIONS.forEach((key) => {
    const zone = document.createElement("div");
    zone.className = "progress-zone";
    zone.dataset.section = key;
    zone.textContent = labels[key];
    nav.appendChild(zone);
  });
  nav.style.display = "none";
  document.body.insertBefore(nav, document.body.firstChild);
  setSection("learn-how");
}

function setSection(key) {
  const idx = SECTIONS.indexOf(key);
  document.querySelectorAll(".progress-zone").forEach((el, i) => {
    el.classList.toggle("active", i === idx);
    el.classList.toggle("done", i < idx);
  });
}

function hideChrome() {
  const bar = document.querySelector("#progress-bar");
  if (bar) bar.style.display = "none";
}

(async function () {
  createProgressBar();

  const jsPsychContainer = document.createElement("div");
  document.body.appendChild(jsPsychContainer);

  const jsPsych = initJsPsych({
    display_element: jsPsychContainer,
    on_finish: hideChrome,
  });

  const progressBar = document.querySelector("#progress-bar");
  const pauseControl = createPauseButton(jsPsych, progressBar);
  const stopControl = createStopButton(jsPsych, progressBar);

  const timeline = [];

  if (new URLSearchParams(window.location.search).get("dev") === "debrief") {
    document.body.classList.add("study-active");
    document.querySelector("#progress-bar").style.display = "";
    setSection("wrap-up");
    timeline.push(buildDebriefTrialFromStats(computeStats(DEV_FAKE_TRIALS)));
    timeline.push(buildExitSurvey());
    timeline.push(buildFinalPage());
    await jsPsych.run(timeline);
    return;
  }

  const devParam = new URLSearchParams(window.location.search).get("dev");
  const skipConsent = devParam === "skip-consent";
  const chsRecord = skipConsent ? null : (window.chsRecord ?? null);

  if (devParam === "consent-only") {
    timeline.push(...buildConsentTimeline(chsRecord, jsPsych));
    await jsPsych.run(timeline);
    return;
  }

  timeline.push(...buildConsentTimeline(chsRecord, jsPsych));

  timeline.push({
    type: HtmlButtonResponsePlugin,
    stimulus: INSTRUCTIONS,
    choices: ["Continue"],
    on_start: () => {
      document.body.classList.add("study-active");
      document.querySelector("#progress-bar").style.display = "";
    },
  });

  timeline.push(...buildPracticeTimeline(PRACTICE_SENTENCES));

  timeline.push({
    type: HtmlButtonResponsePlugin,
    stimulus: PRE_STORIES,
    choices: ["Let's go!"],
    on_start: () => setSection("story-1"),
  });

  const orderedPassages = [...passages];
  shuffle(orderedPassages);
  for (let p = 0; p < orderedPassages.length; p++) {
    if (p > 0) {
      timeline.push({
        type: HtmlButtonResponsePlugin,
        stimulus: BETWEEN_PASSAGES,
        choices: ["Start next story"],
        on_start: () => setSection(`story-${p + 1}`),
      });
    }
    timeline.push(...buildPassageTimeline(orderedPassages[p], p, orderedPassages.length));
  }

  const debriefTrial = buildDebriefTrial(jsPsych);
  debriefTrial.on_start = () => {
    setSection("wrap-up");
    pauseControl.hide();
    stopControl.hide();
  };
  timeline.push(debriefTrial);
  timeline.push(buildExitSurvey());
  timeline.push(buildFinalPage());

  await jsPsych.run(timeline);
})();
