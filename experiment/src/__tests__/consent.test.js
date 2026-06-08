import { describe, it, expect } from "vitest";
import HtmlButtonResponsePlugin from "@jspsych/plugin-html-button-response";
import { buildConsentTimeline } from "../consent.js";

// Stand-ins for the @lookit/record CHS globals.
class VideoConfigPlugin {}
class VideoConsentPlugin {}
class VideoAssentPlugin {}
const mockChsRecord = { VideoConfigPlugin, VideoConsentPlugin, VideoAssentPlugin };

// ---------------------------------------------------------------------------
// CHS mode (chsRecord provided)
// ---------------------------------------------------------------------------

describe("buildConsentTimeline (CHS mode)", () => {
  it("returns 3 trials: config, consent, assent", () => {
    const trials = buildConsentTimeline(mockChsRecord);
    expect(trials).toHaveLength(3);
  });

  it("first trial uses VideoConfigPlugin", () => {
    const [config] = buildConsentTimeline(mockChsRecord);
    expect(config.type).toBe(VideoConfigPlugin);
  });

  it("second trial uses VideoConsentPlugin", () => {
    const [, consent] = buildConsentTimeline(mockChsRecord);
    expect(consent.type).toBe(VideoConsentPlugin);
  });

  it("consent trial has all required parameters", () => {
    const [, consent] = buildConsentTimeline(mockChsRecord);
    for (const key of ["PIName", "institution", "PIContact", "payment", "procedures", "purpose"]) {
      expect(consent).toHaveProperty(key);
    }
  });

  it("procedures field contains no stray closing HTML tags", () => {
    const [, consent] = buildConsentTimeline(mockChsRecord);
    expect(consent.procedures).not.toMatch(/<\//);
  });

  it("third trial uses VideoAssentPlugin", () => {
    const [, , assent] = buildConsentTimeline(mockChsRecord);
    expect(assent.type).toBe(VideoAssentPlugin);
  });

  it("assent trial has pages and min_age_to_assent", () => {
    const [, , assent] = buildConsentTimeline(mockChsRecord);
    expect(assent).toHaveProperty("pages");
    expect(assent).toHaveProperty("min_age_to_assent");
    expect(Array.isArray(assent.pages)).toBe(true);
    expect(assent.pages.length).toBeGreaterThan(0);
  });
});

// ---------------------------------------------------------------------------
// Dev mode (chsRecord is null)
// ---------------------------------------------------------------------------

describe("buildConsentTimeline (dev mode)", () => {
  it("returns 2 trials", () => {
    const trials = buildConsentTimeline(null);
    expect(trials).toHaveLength(2);
  });

  it("both trials use HtmlButtonResponsePlugin", () => {
    const trials = buildConsentTimeline(null);
    for (const t of trials) {
      expect(t.type).toBe(HtmlButtonResponsePlugin);
    }
  });

  it("consent trial stimulus contains consent field content", () => {
    const [consent] = buildConsentTimeline(null);
    expect(consent.stimulus).toMatch(/PIName|institution|procedures|purpose/i);
  });

  it("consent trial is tagged with trial_type consent-dev", () => {
    const [consent] = buildConsentTimeline(null);
    expect(consent.data).toMatchObject({ trial_type: "consent-dev" });
  });

  it("assent trial has a single 'I agree to participate' choice", () => {
    const [, assent] = buildConsentTimeline(null);
    expect(assent.choices).toEqual(["I agree to participate"]);
  });

  it("assent trial is tagged with trial_type assent-dev", () => {
    const [, assent] = buildConsentTimeline(null);
    expect(assent.data).toMatchObject({ trial_type: "assent-dev" });
  });
});
