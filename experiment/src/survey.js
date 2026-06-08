import SurveyTextPlugin from "@jspsych/plugin-survey-text";
import HtmlButtonResponsePlugin from "@jspsych/plugin-html-button-response";

export function buildExitSurvey() {
  return {
    type: SurveyTextPlugin,
    preamble: "<h2>Before you go, we have a few quick questions!</h2> Your responses will help us make our next study better.",
    questions: [
      {
        prompt: "Was there anything confusing or tricky?",
        rows: 3,
        required: false,
      },
      {
        prompt: "How was the length of the study? Would you prefer one longer story or more shorter stories?",
        rows: 2,
        required: false,
      },
      {
        prompt: "What topics would you like to read about in a future study?",
        rows: 3,
        required: false,
      },
            {
        prompt: "Is there anything that would make this study better or more fun?",
        rows: 3,
        required: false,
      },
                  {
        prompt: "Any other comments?",
        rows: 3,
        required: false,
      },
    ],
    data: { survey: "exit" },
  };
}

export function buildFinalPage() {
  return {
    type: HtmlButtonResponsePlugin,
    stimulus:
      "<h2>You're all done!</h2>" +
      `<img src="https://raw.githubusercontent.com/vboyce/kid-maze-passages/main/experiment/assets/images/115176-703930484_tiny-ezgif.com-video-to-gif-converter.gif"` +
      ` alt="Penguins celebrating" style="width:60%;max-height:40vh;display:block;margin:16px auto;">` +
      "<p>Thank you for participating in this study!</p>"+
      "<p> This study is about when words are harder or easier to read, and how that might change as kids grow up."+
      " Adults take longer to read words that are less common (like `porcupine`) compared to words that are common (like `dog`)."+
      " Adults are faster to read words that they expect. It's easier to read `barked` in `The dog barked` than in `The cat barked`. </p>" +
      "<p>In this study, we're exploring whether kids show the same patterns, so we can learn more about how language and reading skills develop over time!</p>" +
      "<p>If you have any questions, your parent can contact us via the Children Helping Science website.</p>",
    choices: ["Done!"],
  };
}
