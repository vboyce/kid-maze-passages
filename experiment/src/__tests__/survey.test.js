import { describe, it, expect } from "vitest";
import SurveyTextPlugin from "@jspsych/plugin-survey-text";
import HtmlButtonResponsePlugin from "@jspsych/plugin-html-button-response";
import { buildDebriefTrial, buildExitSurvey, buildFinalPage } from "../survey.js";

// ---------------------------------------------------------------------------
// buildDebriefTrial
// ---------------------------------------------------------------------------

describe("buildDebriefTrial", () => {
  it("returns an HtmlButtonResponse trial", () => {
    const trial = buildDebriefTrial();
    expect(trial.type).toBe(HtmlButtonResponsePlugin);
  });

  it("has at least one choice", () => {
    const trial = buildDebriefTrial();
    expect(trial.choices.length).toBeGreaterThan(0);
  });

  it("stimulus contains the heading", () => {
    const trial = buildDebriefTrial();
    expect(trial.stimulus).toContain("Thanks for reading!");
  });
});

// ---------------------------------------------------------------------------
// buildExitSurvey
// ---------------------------------------------------------------------------

describe("buildExitSurvey", () => {
  it("returns a single survey-text trial", () => {
    const trial = buildExitSurvey();
    expect(trial.type).toBe(SurveyTextPlugin);
  });

  it("has five questions", () => {
    const trial = buildExitSurvey();
    expect(trial.questions).toHaveLength(5);
  });

  it("no question is required", () => {
    const trial = buildExitSurvey();
    for (const q of trial.questions) {
      expect(q.required).toBeFalsy();
    }
  });

  it("tags trial data with survey: 'exit'", () => {
    const trial = buildExitSurvey();
    expect(trial.data).toMatchObject({ survey: "exit" });
  });
});

// ---------------------------------------------------------------------------
// buildFinalPage
// ---------------------------------------------------------------------------

describe("buildFinalPage", () => {
  it("returns an HtmlButtonResponse trial", () => {
    const trial = buildFinalPage();
    expect(trial.type).toBe(HtmlButtonResponsePlugin);
  });

  it("has a single Done button", () => {
    const trial = buildFinalPage();
    expect(trial.choices).toHaveLength(1);
  });

  it("stimulus contains debrief information about the study", () => {
    const trial = buildFinalPage();
    expect(trial.stimulus.toLowerCase()).toMatch(/read/);
  });
});
