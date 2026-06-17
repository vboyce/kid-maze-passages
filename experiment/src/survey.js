import SurveyTextPlugin from "@jspsych/plugin-survey-text";
import HtmlButtonResponsePlugin from "@jspsych/plugin-html-button-response";

export function buildDebriefTrial() {
  return {
    type: HtmlButtonResponsePlugin,
    stimulus:
      `<h2>Thanks for reading!</h2>` +
      `<img src="https://raw.githubusercontent.com/vboyce/kid-maze-passages/main/experiment/assets/images/115176-703930484_tiny-ezgif.com-video-to-gif-converter.gif"` +
      ` alt="Penguins celebrating" style="width:40%;max-height:25vh;display:block;margin:8px auto;">`,
    choices: ["Continue"],
    button_html: ['<button class="jspsych-btn">%choice%</button>'],
  };
}

export function buildExitSurvey() {
  return {
    type: SurveyTextPlugin,
    preamble: "<h2>Before you go, we have a few quick questions!</h2> <p>Your responses will help us make our next study better.</p>"+
    "<p><b>Parents:</b> You can help your child type answers to these questions. All questions are optional.</p>",
    questions: [
      {
        prompt: "Was there anything confusing or tricky?",
        rows: 3,
        required: false,
      },
      {
        prompt: "How was the length of the study? Would you prefer one longer story or more shorter stories?",
        rows: 3,
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
      `<img src="https://raw.githubusercontent.com/vboyce/kid-maze-passages/main/experiment/assets/images/330px-Wikipedia20_animated_Confetti.gif"` +
      ` alt="Confetti celebration" style="width:30%;max-height:20vh;display:block;margin:16px auto;">` +
      "<p>Thank you for participating in this study!</p>" +
      "<p>This study is about when words are harder or easier to read, and how that might change as kids grow up." +
      " Adults take longer to read words like porcupine compared to words like dog, because dog is a more common word." +
      " Adults also take longer to read words that don't fit the context -- like barked in 'The cat barked' compared to barked in 'The dog barked'.</p>" +
      "<p>In this study, we're exploring whether kids show the same patterns, so we can learn more about how language and reading skills develop over time!</p>" +
      "<p>If you have any questions, your parent can contact us via the Children Helping Science website.</p>",
    choices: ["Done!"],
    button_html: ['<button class="jspsych-btn">%choice%</button>'],
  };
}

export function buildParentDebrief() {
  const body =
    "<h2>Thanks for participating in our study!</h2>" +
    "<p><b>Purpose: </b> This study was about when words are harder or easier to read, and how that might change as kids grow up. Adults take longer to read words that are less common (like porcupine) or that don't fit the context (like barked in 'The cat barked'). These patterns suggest that adults are building expectations about what the next word is as they read. We want to know if children are doing the same thing, and how this might change as they get older. so we're measuring how children's reading times vary based on how common or predictable words are. This is an early study using this task, and the results will also help us design studies for a wider range of ages. </p>" +
    "<p><b>What happened in the study: </b>In this study, your child read some sentences in a way where they saw two words at a time and picked which one continues the sentence. We use this because it slows down reading so we can carefully measure how long your child spent on each word. </p>" +
    "<p><b><i>This wasn't a test!</i></b> Sometimes sentences are harder and sometimes they are easier. We want to know when it was faster and easier to choose the right word and when it was harder. We're interested in when it takes children longer to find the right word because it helps us understand how their language and reading skills are developing, and how children's reading might be different than adults'. </p>" +
    "<p> To learn more about what happens moment by moment as adults (and children) read, see  <a href='https://blog.donders.ru.nl/word-forecasts-how-your-brain-reads-into-the-future/?lang=en'>this blogpost from Donders University</a>."+ 
    "<p><b>Compensation: </b>We'll email you a $5 US Amazon gift card within one week to thank you for your time. To be eligible for compensation, (1) your child must be in the age range for this study, (2) you need to submit a valid consent video, and (3) your child must be visible in the consent recording. Each child is eligible for compensation only once.</p>" +
    "<p>If you have questions, you can contact us via the Children Helping Science website.</p>";
  return {
    type: HtmlButtonResponsePlugin,
    stimulus: `<div style="max-width:620px;margin:0 auto;padding:0 24px;font-size:1.05em;line-height:1.7;text-align:left">${body}</div>`,
    choices: ["Continue"],
    button_html: ['<button style="padding:12px 36px;font-size:1.1em;border-radius:8px;background:#4a7fcb;color:white;border:none;cursor:pointer;margin-top:8px">%choice%</button>'],
  };
}
