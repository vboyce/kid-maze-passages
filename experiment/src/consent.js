import HtmlButtonResponsePlugin from "@jspsych/plugin-html-button-response";

const IMAGE_BASE_URL =
  "https://raw.githubusercontent.com/vboyce/kid-maze-passages/main/experiment/assets/images/";

// Wrap assent stimulus in a narrow centered column so it doesn't span the full screen width.
function assentStimulus(html) {
  return `<div style="max-width:520px;margin:0 auto;font-size:1.1em;line-height:1.6">${html}</div>`;
}

const CONSENT_PARAMS = {
  PIName: "Roger Levy",
  institution: "Massachusetts Institute of Technology",
  PIContact: "Veronica Boyce at vboyce@mit.edu",
  purpose:
    "This is a research study. We are researchers studying how people understand language as they " +
    "hear and read it. Our research is about how children process words to understand the meaning of sentences.",
  procedures:
    "During this study, your child will read some sentences in a way where they see two words at a time and pick which one continues the sentence.",
  payment:
    "There are no direct benefits to you or your child from taking part in this research study. " +
    "After you participate, we'll email you a $5 Amazon gift card within one week to thank you for your time. " +
    "To be eligible for compensation, (1) your child must be in the age range for this study, " +
    "(2) you need to submit a valid consent video, and (3) your child must be visible in the consent recording. " +
    "Your child does not need to finish the entire study to be eligible. " +
    "Each child is eligible for compensation only once.",
  risk_statement: "There are no known risks to participation.",
  datause:
    "We are interested in your child's reading times and key presses as they read sentences. " +
    "Your child's responses will be recorded for data analysis.",
  research_rights_statement:
    "You are not waiving any legal claims, rights or remedies because of your participation in this research study. " +
    "If you feel you have been treated unfairly, or you have questions regarding your rights as a study participant, " +
    "you may contact the Chairman of the Committee on the Use of Humans as Experimental Subjects, M.I.T., " +
    "Room E25-143B, 77 Massachusetts Ave, Cambridge, MA 02139, phone 1-617-253-6787.",
  template: "consent-recording-only",
};

const IMG = (file, style) => `<img src='${IMAGE_BASE_URL}${file}' alt='' style='${style}'>`;

const ASSENT_PAGES = [
  {
    stimulus: assentStimulus(
      IMG("assent_1.png", "max-height:180px;display:block;margin:0 auto 12px") +
      "<p>We are asking you to take part in a research study! " +
      "We are scientists who are trying to learn more about how kids read and understand language.</p>"
    ),
    show_webcam: false,
  },
  {
    stimulus: assentStimulus(
      `<img src='${IMAGE_BASE_URL}vboyce.jpg' alt='Veronica Boyce' ` +
      "style='width:140px;height:140px;object-fit:cover;border-radius:50%;display:block;margin:0 auto 12px'>" +
      "<p>I'm Veronica Boyce, a researcher at MIT. " +
      "I study how people understand language — like what makes some sentences easy to understand and others harder.</p>"
    ),
    show_webcam: false,
  },
  {
    stimulus: assentStimulus(
      `<img src='${IMAGE_BASE_URL}assent_3_maze.png' alt='Example of the maze task' style='max-height:180px;display:block;margin:0 auto 12px'>` +
      "<p>In this study, you will read sentences in a funny way — you'll see two words at a time and pick which one continues the sentence.</p>" +
      "<p>If you decide to do this study, we'll give you step-by-step instructions!</p>"
    ),
    show_webcam: false,
  },
  {
    stimulus: assentStimulus(
      IMG("assent_4.png", "max-height:180px;display:block;margin:0 auto 12px") +
      "<p>This isn't a test! We just want to learn more about how kids read and think.<br>" +
      "There are no right or wrong answers.<br>" +
      "There will be places to take a break if you need one.</p>"
    ),
    show_webcam: false,
  },
  {
    stimulus: assentStimulus(
      IMG("assent_5.png", "max-height:180px;display:block;margin:0 auto 12px") +
      "<p>Participation is voluntary.<br>" +
      "If you don't want to do this study, just press &ldquo;no&rdquo; below — that's totally fine.<br>" +
      "If you start and then want to stop, you can do that too – just tell your parent or close the experiment window.</p>"
    ),
    show_webcam: false,
  },
  {
    stimulus: assentStimulus(
      IMG("assent_6.png", "max-height:180px;display:block;margin:0 auto 12px") +
      "<p>There are no known risks to being in this study. " +
      "There are no direct benefits to you personally, but you'll be helping us understand how kids learn to read!</p>" +
      "<p>If you have questions about this study, ask your parent, send us a message on Children Helping Science, " +
      "or email Veronica Boyce at vboyce@mit.edu.</p>" +
      "<p>If you feel you have been treated unfairly, or you have questions regarding your rights as a study participant, " +
      "you can contact MIT's research committee (COUHES) at 617-253-6787.</p>"
    ),
    show_webcam: false,
  },
];

export const CONSENT_IMAGES = [
  "assent_1.png",
  "vboyce.jpg",
  "assent_3_maze.png",
  "assent_4.png",
  "assent_5.png",
  "assent_6.png",
].map((f) => IMAGE_BASE_URL + f);

const MIN_AGE_TO_ASSENT = 7;

// chsRecord: the @lookit/record global injected by CHS (window.chsRecord in production).
// Pass null to get dev-mode placeholder screens instead of video-recording trials.
// jsPsych: the running instance. Used to clear the display element before VideoConsent and
// VideoAssent, because those plugins use insertAdjacentHTML (prepend) rather than innerHTML
// (replace), and jsPsych 7 does not clear the display element between trials.
export function buildConsentTimeline(chsRecord, jsPsych = null) {
  const clearDisplay = jsPsych
    ? () => { jsPsych.getDisplayElement().innerHTML = ""; }
    : () => {};
  if (!chsRecord) {
    const consentFields = Object.entries(CONSENT_PARAMS)
      .filter(([k]) => !["template", "additional_segments"].includes(k))
      .map(([k, v]) => `<p><b>${k}:</b> ${v}</p>`)
      .join("");

    const assentContent = ASSENT_PAGES.map((p) => p.stimulus).join("");

    return [
      {
        type: HtmlButtonResponsePlugin,
        stimulus: "<h2>Parent/Guardian Consent</h2>" + consentFields,
        choices: ["I consent"],
        data: { trial_type: "consent-dev" },
      },
      {
        type: HtmlButtonResponsePlugin,
        stimulus: "<h2>Child Assent</h2>" + assentContent,
        choices: ["I agree to participate"],
        data: { trial_type: "assent-dev" },
      },
    ];
  }

  const { VideoConfigPlugin, VideoConsentPlugin, VideoAssentPlugin } = chsRecord;

  return [
    { type: VideoConfigPlugin },
    { type: VideoConsentPlugin, ...CONSENT_PARAMS, on_start: clearDisplay },
    {
      type: VideoAssentPlugin,
      pages: ASSENT_PAGES,
      min_age_to_assent: MIN_AGE_TO_ASSENT,
      on_start: clearDisplay,
    },
  ];
}
