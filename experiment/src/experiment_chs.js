// CHS production entry point — build with build_chs.sh, not npm start.
// Differences from experiment.js:
//   - No SCSS import (CSS compiled separately by build_chs.sh)
//   - No PreloadPlugin (all images served from GitHub URLs)
//   - Runs as an IIFE; no jspsych-builder export async function run() wrapper
//   - Uses window.initJsPsych (chsInitJsPsych) for auto-save and exit redirect
//   - on_finish hides chrome

import HtmlButtonResponsePlugin from "@jspsych/plugin-html-button-response";

import { passages, PRACTICE_SENTENCES, PRACTICE_IMAGES, PASSAGE_IMAGES } from "./stimuli.js";
import { shuffle } from "./helper.js";
import { INSTRUCTIONS, PRE_STORIES, BETWEEN_PASSAGES } from "./instructions.js";
import { buildPassageTimeline, buildPracticeTimeline } from "./timeline.js";
import { buildDebriefTrial, buildExitSurvey, buildParentDebrief, buildFinalPage } from "./survey.js";
import { createPauseButton, createStopButton } from "./controls.js";
import { buildConsentTimeline, CONSENT_IMAGES } from "./consent.js";

// Preload all study images immediately so they're cached before each section renders.
[...CONSENT_IMAGES, ...PRACTICE_IMAGES, ...PASSAGE_IMAGES].forEach((src) => { new Image().src = src; });

const SECTIONS = ["learn-how", "story-1", "story-2", "wrap-up"];

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
  const container = document.querySelector("#jspsych-container");
  if (container) container.style.display = "none";
}

(async function () {
  createProgressBar();

  const jsPsychContainer = document.createElement("div");
  jsPsychContainer.id = "jspsych-container";
  document.body.appendChild(jsPsychContainer);

  const jsPsych = window.initJsPsych({
    display_element: jsPsychContainer,
    on_finish: hideChrome,
  });

  const progressBar = document.querySelector("#progress-bar");
  const pauseControl = createPauseButton(jsPsych, progressBar);
  const stopControl = createStopButton(jsPsych, progressBar);

  const chsExitSurveyTrial = () => {
    const chsSurvey = window.chsSurvey ?? null;
    if (!chsSurvey) return null;
    return {
      type: chsSurvey.ExitSurveyPlugin,
      show_databrary_options: false,
      include_withdrawal_example: true,
      private_level_only: true,
      on_start: () => {
        document.body.classList.remove("study-active");
        document.querySelector("#progress-bar").style.display = "none";
        document.querySelector("#jspsych-container").style.display = "";
      },
    };
  };

  const chsRecord = window.chsRecord ?? null;
  const timeline = [];

  timeline.push(...buildConsentTimeline(chsRecord, jsPsych));

  timeline.push({
    type: HtmlButtonResponsePlugin,
    stimulus: `<div class="instruction-slide">${INSTRUCTIONS}</div>`,
    choices: ["Continue"],
    button_html: ['<button class="jspsych-btn">%choice%</button>'],
    on_start: () => {
      document.body.classList.add("study-active");
      document.querySelector("#progress-bar").style.display = "";
    },
  });

  timeline.push(...buildPracticeTimeline(PRACTICE_SENTENCES));

  // SHORT_BUILD is substituted by esbuild (--define:SHORT_BUILD=true/false).
  // When true, the passage stories are omitted so the end-to-end flow can be tested on CHS.
  if (!SHORT_BUILD) {
    timeline.push({
      type: HtmlButtonResponsePlugin,
      stimulus: `<div class="instruction-slide">${PRE_STORIES}</div>`,
      choices: ["Let's go!"],
      button_html: ['<button class="jspsych-btn">%choice%</button>'],
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
          button_html: ['<button class="jspsych-btn">%choice%</button>'],
          on_start: () => setSection(`story-${p + 1}`),
        });
      }
      timeline.push(...buildPassageTimeline(orderedPassages[p], p, orderedPassages.length));
    }
  }

  const debriefTrial = buildDebriefTrial();
  debriefTrial.on_start = () => {
    setSection("wrap-up");
    pauseControl.hide();
    stopControl.hide();
  };
  timeline.push(debriefTrial);
  timeline.push(buildExitSurvey());
  timeline.push(buildFinalPage());

  const exitTrial = chsExitSurveyTrial();
  if (exitTrial) timeline.push(exitTrial);

  timeline.push(buildParentDebrief());

  await jsPsych.run(timeline);
})();
