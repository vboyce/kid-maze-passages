import { describe, it, expect } from "vitest";
import HtmlButtonResponsePlugin from "@jspsych/plugin-html-button-response";
import {
  wordLength,
  extractWordData,
  computeStats,
  debriefHtml,
  buildDebriefTrial,
  buildDebriefTrialFromStats,
  linearRegression,
} from "../debrief.js";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const passageTrial1 = {
  trial_type: "maze",
  passage: 1,
  sentence: 1,
  words: ["The", "cat", "sat", "on", "the", "mat."],
  rt: [300, 350, 400, 250, 300, 350],
  correct: [1, 1, 0, 1, 1, 1],
};

const passageTrial2 = {
  trial_type: "maze",
  passage: 1,
  sentence: 2,
  words: ["A", "dog", "ran."],
  rt: [200, 450, 380],
  correct: [1, 1, 1],
};

const practiceTrial = {
  trial_type: "maze",
  // no passage field — practice
  words: ["The", "bunny", "hopped."],
  rt: [300, 400, 350],
  correct: [1, 1, 1],
};

const nonMazeTrial = {
  trial_type: "html-button-response",
  rt: 500,
};

const mockJsPsych = {
  data: {
    get: () => ({ values: () => [passageTrial1, passageTrial2, practiceTrial, nonMazeTrial] }),
  },
};

// ---------------------------------------------------------------------------
// wordLength
// ---------------------------------------------------------------------------

describe("wordLength", () => {
  it("returns character count for plain words", () => {
    expect(wordLength("cat")).toBe(3);
    expect(wordLength("a")).toBe(1);
    expect(wordLength("hello")).toBe(5);
  });

  it("strips trailing period", () => {
    expect(wordLength("mat.")).toBe(3);
    expect(wordLength("ran.")).toBe(3);
  });

  it("strips trailing comma", () => {
    expect(wordLength("well,")).toBe(4);
  });

  it("strips trailing question mark and exclamation mark", () => {
    expect(wordLength("ready?")).toBe(5);
    expect(wordLength("wow!")).toBe(3);
  });
});

// ---------------------------------------------------------------------------
// extractWordData
// ---------------------------------------------------------------------------

describe("extractWordData", () => {
  it("returns one entry per word across all passage maze trials", () => {
    const obs = extractWordData([passageTrial1]);
    expect(obs).toHaveLength(6);
  });

  it("each observation has length, rt, and correct fields", () => {
    const obs = extractWordData([passageTrial1]);
    for (const o of obs) {
      expect(typeof o.length).toBe("number");
      expect(typeof o.rt).toBe("number");
      expect(typeof o.correct).toBe("boolean");
    }
  });

  it("strips punctuation for length", () => {
    const obs = extractWordData([passageTrial1]);
    // "mat." is the 6th word → length should be 3, not 4
    const matObs = obs[5];
    expect(matObs.length).toBe(3);
  });

  it("marks correct=true when trial.correct[i] === 1", () => {
    const obs = extractWordData([passageTrial1]);
    expect(obs[0].correct).toBe(true);   // "The" — correct
    expect(obs[2].correct).toBe(false);  // "sat" — incorrect
  });

  it("includes rt values from the trial", () => {
    const obs = extractWordData([passageTrial1]);
    expect(obs[0].rt).toBe(300);
    expect(obs[2].rt).toBe(400);
  });

  it("excludes practice trials (no passage field)", () => {
    const obs = extractWordData([practiceTrial]);
    expect(obs).toHaveLength(0);
  });

  it("excludes non-maze trials", () => {
    const obs = extractWordData([nonMazeTrial]);
    expect(obs).toHaveLength(0);
  });

  it("aggregates across multiple passage trials", () => {
    const obs = extractWordData([passageTrial1, passageTrial2]);
    expect(obs).toHaveLength(9); // 6 + 3
  });
});

// ---------------------------------------------------------------------------
// computeStats
// ---------------------------------------------------------------------------

describe("computeStats", () => {
  it("pctCorrect is 1 when all first answers are correct", () => {
    const { pctCorrect } = computeStats([passageTrial2]);
    expect(pctCorrect).toBe(1);
  });

  it("pctCorrect is the correct fraction for mixed results", () => {
    // passageTrial1: 5 correct out of 6
    const { pctCorrect } = computeStats([passageTrial1]);
    expect(pctCorrect).toBeCloseTo(5 / 6);
  });

  it("pctCorrect aggregates across multiple trials", () => {
    // passageTrial1: 5/6 correct; passageTrial2: 3/3 correct → 8/9
    const { pctCorrect } = computeStats([passageTrial1, passageTrial2]);
    expect(pctCorrect).toBeCloseTo(8 / 9);
  });

  it("excludes practice and non-maze trials from pctCorrect", () => {
    const { pctCorrect } = computeStats([passageTrial2, practiceTrial, nonMazeTrial]);
    // only passageTrial2 counts: 3/3 = 1
    expect(pctCorrect).toBe(1);
  });

  it("returns 0 pctCorrect and empty byLength when no passage trials", () => {
    const { pctCorrect, byLength } = computeStats([practiceTrial, nonMazeTrial]);
    expect(pctCorrect).toBe(0);
    expect(byLength.size).toBe(0);
  });

  it("byLength groups observations by word length", () => {
    const { byLength } = computeStats([passageTrial1]);
    // "on" → length 2; "The","cat","sat","the","mat" → length 3 each
    expect(byLength.has(2)).toBe(true);
    expect(byLength.has(3)).toBe(true);
  });

  it("byLength separates correct from incorrect RTs", () => {
    const { byLength } = computeStats([passageTrial1]);
    const len3 = byLength.get(3);
    // Correct: The(300), cat(350), the(300), mat(350) → 4 entries
    // Incorrect: sat(400) → 1 entry
    expect(len3.correctRts).toHaveLength(4);
    expect(len3.incorrectRts).toHaveLength(1);
    expect(len3.incorrectRts[0]).toBe(400);
  });
});

// ---------------------------------------------------------------------------
// debriefHtml
// ---------------------------------------------------------------------------

describe("debriefHtml", () => {
  it("includes the rounded percentage correct", () => {
    const stats = { pctCorrect: 0.856, byLength: new Map() };
    const html = debriefHtml(stats);
    expect(html).toContain("86%");
  });

  it("includes text about longer words taking more time", () => {
    const stats = { pctCorrect: 0.9, byLength: new Map() };
    const html = debriefHtml(stats);
    // Should mention word length / longer words somewhere
    expect(html.toLowerCase()).toMatch(/longer word/);
  });

  it("includes a canvas element for the chart", () => {
    const stats = { pctCorrect: 0.9, byLength: new Map() };
    const html = debriefHtml(stats);
    expect(html).toContain("<canvas");
    expect(html).toContain('id="debrief-chart"');
  });
});

// ---------------------------------------------------------------------------
// buildDebriefTrial
// ---------------------------------------------------------------------------

describe("buildDebriefTrial", () => {
  it("returns an HtmlButtonResponse trial", () => {
    const trial = buildDebriefTrial(mockJsPsych);
    expect(trial.type).toBe(HtmlButtonResponsePlugin);
  });

  it("has an on_load function", () => {
    const trial = buildDebriefTrial(mockJsPsych);
    expect(typeof trial.on_load).toBe("function");
  });

  it("has at least one choice", () => {
    const trial = buildDebriefTrial(mockJsPsych);
    expect(trial.choices.length).toBeGreaterThan(0);
  });

  it("stimulus is a function that returns HTML containing the pct correct", () => {
    const trial = buildDebriefTrial(mockJsPsych);
    // stimulus can be a function (called at trial start) or a string
    const html = typeof trial.stimulus === "function" ? trial.stimulus() : trial.stimulus;
    // passageTrial1: 5/6, passageTrial2: 3/3 → 8/9 ≈ 89%
    expect(html).toContain("89%");
  });
});

// ---------------------------------------------------------------------------
// buildDebriefTrialFromStats
// ---------------------------------------------------------------------------

describe("buildDebriefTrialFromStats", () => {
  const fakeStats = { pctCorrect: 0.75, byLength: new Map([[3, { correctRts: [300, 350], incorrectRts: [500] }]]) };

  it("returns an HtmlButtonResponse trial", () => {
    const trial = buildDebriefTrialFromStats(fakeStats);
    expect(trial.type).toBe(HtmlButtonResponsePlugin);
  });

  it("stimulus is a plain string (not a function) containing the pct correct", () => {
    const trial = buildDebriefTrialFromStats(fakeStats);
    expect(typeof trial.stimulus).toBe("string");
    expect(trial.stimulus).toContain("75%");
  });

  it("has an on_load function", () => {
    const trial = buildDebriefTrialFromStats(fakeStats);
    expect(typeof trial.on_load).toBe("function");
  });

  it("has at least one choice", () => {
    const trial = buildDebriefTrialFromStats(fakeStats);
    expect(trial.choices.length).toBeGreaterThan(0);
  });
});

// ---------------------------------------------------------------------------
// linearRegression
// ---------------------------------------------------------------------------

describe("linearRegression", () => {
  it("returns null for an empty array", () => {
    expect(linearRegression([])).toBeNull();
  });

  it("returns null for a single point", () => {
    expect(linearRegression([{ x: 1, y: 2 }])).toBeNull();
  });

  it("returns correct slope and intercept for a perfect line y = 2x + 1", () => {
    const result = linearRegression([{ x: 1, y: 3 }, { x: 2, y: 5 }, { x: 3, y: 7 }]);
    expect(result.slope).toBeCloseTo(2);
    expect(result.intercept).toBeCloseTo(1);
  });

  it("returns a positive slope for data that increases with x", () => {
    const result = linearRegression([{ x: 1, y: 1.1 }, { x: 2, y: 1.9 }, { x: 3, y: 3.2 }]);
    expect(result.slope).toBeGreaterThan(0);
  });

  it("works with exactly two points", () => {
    const result = linearRegression([{ x: 0, y: 0 }, { x: 4, y: 8 }]);
    expect(result.slope).toBeCloseTo(2);
    expect(result.intercept).toBeCloseTo(0);
  });
});
