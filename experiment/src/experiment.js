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
  DONE,
} from "./instructions.js";
import { buildPassageTimeline, buildPracticeTimeline } from "./timeline.js";
import { buildDebriefTrial } from "./debrief.js";

export async function run({ assetPaths, input = {}, environment, title, version }) {
  const jsPsych = initJsPsych({
    on_finish: function () {
      jsPsych.data.displayData();
    },
    on_close: function () {
      // TODO: sendBeacon partial data to CHS
    },
  });

  const timeline = [];

  timeline.push({
    type: PreloadPlugin,
    images: assetPaths.images,
  });

  // Instructions
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
      });
    }
    timeline.push(...buildPassageTimeline(orderedPassages[p], p, orderedPassages.length));
  }

  // Debrief: % correct + RT-by-word-length chart
  timeline.push(buildDebriefTrial(jsPsych));

  // Done
  timeline.push({
    type: HtmlButtonResponsePlugin,
    stimulus: DONE,
    choices: ["Finish"],
  });

  await jsPsych.run(timeline);
}
