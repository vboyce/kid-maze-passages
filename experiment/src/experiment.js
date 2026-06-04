/**
 * @title kid-maze
 * @description Maze reading task for children (8-12)
 * @version 0.1.0
 *
 * @assets assets/
 */

import "../styles/main.scss";
import { initJsPsych } from "jspsych";
import HtmlButtonResponsePlugin from "@jspsych/plugin-html-button-response";
import PreloadPlugin from "@jspsych/plugin-preload";

import { passages, PRACTICE_SENTENCES } from "./stimuli.js";
import { shuffle } from "./helper.js";
import {
  INSTRUCTIONS,
  PRE_STORIES,
  BETWEEN_PASSAGES,
} from "./instructions.js";
import { buildPassageTimeline, buildPracticeTimeline } from "./timeline.js";
import { buildDebriefTrial, buildDebriefTrialFromStats, computeStats } from "./debrief.js";
import { buildExitSurvey, buildFinalPage } from "./survey.js";

const SECTIONS = ["learn-how", "story-1", "story-2", "wrap-up"];

function createProgressBar() {
  const labels = { "learn-how": "Learn how", "story-1": "Story 1", "story-2": "Story 2", "wrap-up": "Wrap-up" };
  const nav = document.createElement("nav");
  nav.id = "progress-bar";
  SECTIONS.forEach((key) => {
    const zone = document.createElement("div");
    zone.className = "progress-zone";
    zone.dataset.section = key;
    zone.textContent = labels[key];
    nav.appendChild(zone);
  });
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

// Fake maze trial data for ?dev=debrief preview — a mix of word lengths and errors.
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

export async function run({ assetPaths, input = {}, environment, title, version }) {
  createProgressBar();

  // Give jsPsych its own container so it doesn't clear document.body (which
  // would remove the progress bar nav — jsPsych sets display_element.innerHTML
  // on init, wiping everything in the element it receives).
  const jsPsychContainer = document.createElement("div");
  document.body.appendChild(jsPsychContainer);

  const jsPsych = initJsPsych({
    display_element: jsPsychContainer,
    on_finish: function () {
      jsPsych.data.displayData();
    },
    on_close: function () {
      // TODO: sendBeacon partial data to CHS
    },
  });

  const timeline = [];

  if (new URLSearchParams(window.location.search).get("dev") === "debrief") {
    setSection("wrap-up");
    timeline.push(buildDebriefTrialFromStats(computeStats(DEV_FAKE_TRIALS)));
    timeline.push(buildExitSurvey());
    timeline.push(buildFinalPage());
    await jsPsych.run(timeline);
    return;
  }

  timeline.push({
    type: PreloadPlugin,
    images: assetPaths.images,
  });

  // Instructions — progress bar already shows "learn-how" from createProgressBar()
  timeline.push({
    type: HtmlButtonResponsePlugin,
    stimulus: INSTRUCTIONS,
    choices: ["Continue"],
  });

  // Practice
  timeline.push(...buildPracticeTimeline(PRACTICE_SENTENCES));

  // Buffer screen before first story
  timeline.push({
    type: HtmlButtonResponsePlugin,
    stimulus: PRE_STORIES,
    choices: ["Let's go!"],
    on_start: () => setSection("story-1"),
  });

  // Main passages — order randomized per child
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

  // Wrap-up: debrief, survey, final page
  const debriefTrial = buildDebriefTrial(jsPsych);
  debriefTrial.on_start = () => setSection("wrap-up");
  timeline.push(debriefTrial);

  timeline.push(buildExitSurvey());

  // Final page: debrief + done
  timeline.push(buildFinalPage());

  await jsPsych.run(timeline);
}
