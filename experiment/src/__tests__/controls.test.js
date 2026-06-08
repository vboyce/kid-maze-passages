import { describe, it, expect, vi, beforeEach } from "vitest";
import { createPauseButton, createStopButton } from "../controls.js";

// ---------------------------------------------------------------------------
// createPauseButton
// ---------------------------------------------------------------------------

describe("createPauseButton", () => {
  let mockJsPsych;

  beforeEach(() => {
    document.body.innerHTML = "";
    mockJsPsych = {
      pauseExperiment: vi.fn(),
      resumeExperiment: vi.fn(),
    };
  });

  it("appends a pause button to the document body", () => {
    createPauseButton(mockJsPsych);
    expect(document.querySelector("#pause-btn")).not.toBeNull();
  });

  it("clicking pause calls pauseExperiment", () => {
    createPauseButton(mockJsPsych);
    document.querySelector("#pause-btn").click();
    expect(mockJsPsych.pauseExperiment).toHaveBeenCalledOnce();
  });

  it("clicking pause shows the pause overlay", () => {
    createPauseButton(mockJsPsych);
    document.querySelector("#pause-btn").click();
    expect(document.querySelector("#pause-overlay")).not.toBeNull();
  });

  it("clicking resume removes the overlay", () => {
    createPauseButton(mockJsPsych);
    document.querySelector("#pause-btn").click();
    document.querySelector("#resume-btn").click();
    expect(document.querySelector("#pause-overlay")).toBeNull();
  });

  it("clicking resume calls resumeExperiment", () => {
    createPauseButton(mockJsPsych);
    document.querySelector("#pause-btn").click();
    document.querySelector("#resume-btn").click();
    expect(mockJsPsych.resumeExperiment).toHaveBeenCalledOnce();
  });

  it("hide() sets the button display to none", () => {
    const { hide } = createPauseButton(mockJsPsych);
    hide();
    expect(document.querySelector("#pause-btn").style.display).toBe("none");
  });
});

// ---------------------------------------------------------------------------
// createStopButton
// ---------------------------------------------------------------------------

describe("createStopButton", () => {
  let mockJsPsych;

  beforeEach(() => {
    document.body.innerHTML = "";
    mockJsPsych = {
      endExperiment: vi.fn(),
    };
  });

  it("appends a stop button to the document body", () => {
    createStopButton(mockJsPsych);
    expect(document.querySelector("#stop-btn")).not.toBeNull();
  });

  it("clicking stop shows the confirmation overlay", () => {
    createStopButton(mockJsPsych);
    document.querySelector("#stop-btn").click();
    expect(document.querySelector("#stop-overlay")).not.toBeNull();
  });

  it("clicking Keep going removes the overlay without ending the experiment", () => {
    createStopButton(mockJsPsych);
    document.querySelector("#stop-btn").click();
    document.querySelector("#stop-keep-going").click();
    expect(mockJsPsych.endExperiment).not.toHaveBeenCalled();
    expect(document.querySelector("#stop-overlay")).toBeNull();
  });

  it("clicking Yes stop calls endExperiment", () => {
    createStopButton(mockJsPsych);
    document.querySelector("#stop-btn").click();
    document.querySelector("#stop-confirm").click();
    expect(mockJsPsych.endExperiment).toHaveBeenCalledOnce();
  });

  it("clicking Yes stop removes the overlay before ending", () => {
    createStopButton(mockJsPsych);
    document.querySelector("#stop-btn").click();
    document.querySelector("#stop-confirm").click();
    expect(document.querySelector("#stop-overlay")).toBeNull();
  });

  it("hide() sets the button display to none", () => {
    const { hide } = createStopButton(mockJsPsych);
    hide();
    expect(document.querySelector("#stop-btn").style.display).toBe("none");
  });
});
