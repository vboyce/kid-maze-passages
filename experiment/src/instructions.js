// TODO: replace with finalized kid-friendly text before launch

const IMAGE_BASE_URL =
  "https://raw.githubusercontent.com/vboyce/kid-maze-passages/main/experiment/assets/images/";

export const INSTRUCTIONS =
  "<h2>Let's read some stories!</h2>" +
  "<p>We have a fun way to read. You'll see <b>two words</b> on the screen at a time, " +
  "but only one of them belongs in the sentence.</p>" +
  "<p>Your job is to pick the word that fits!</p>" +
  "<p>Press <b>E</b> for the word on the left, <b>I</b> for the word on the right.</p>" +
  `<img src="${IMAGE_BASE_URL}keyboard_hand.jpg"` +
  ` alt="Hands on a keyboard with E and I highlighted" style="width:70%;max-height:40vh;display:block;margin:16px auto;">`
  


// TODO: finalize kid-friendly text
export const PRE_STORIES =
  "<h2>Great practice!</h2>" +
  "<p>Now it's time for the real stories. Remember:</p>" +
  "<p>Pick the word that fits the story.</p>" +
  "<p>Press <b>E</b> for the word on the left, <b>I</b> for the right.</p>" +
  `<img src="${IMAGE_BASE_URL}keyboard_hand.jpg"` +
  ` alt="Hands on a keyboard with E and I highlighted" style="width:70%;max-height:40vh;display:block;margin:16px auto;">` +
  "<p>Try to go fast, but it's okay if you make a mistake — you can try again!</p>"+
  "<p>Ready? Let's go!</p>";

export const BETWEEN_PASSAGES =
  "<h2>Great job!</h2>" +
  `<img src="${IMAGE_BASE_URL}Owl_circling_its_head_repeatedly.gif"` +
  ` alt="A baby owl bobbing its head" style="width:60%;max-height:40vh;display:block;margin:16px auto;">` +
  "<p>You finished the first story! Ready for the next one?</p>";

export const DONE =
  "<h2>You did it!</h2>" +
  "<p>Thanks so much for reading with us today!</p>";

export const INSTRUCTION_IMAGES = [
  "keyboard_hand.jpg",
  "Owl_circling_its_head_repeatedly.gif",
].map((f) => IMAGE_BASE_URL + f);

// Shown briefly after a wrong answer (during the delay before the next keypress is accepted).
export const ERROR_MESSAGE = "<p class='feedback-error'>Oops! That's not it!</p>";

// Shown after the delay, when the next keypress is accepted.
export const REDO_MESSAGE = "<p class='feedback-redo'>Try again!</p>";

// Prefix for practice level-1 wrong-answer hints: shown as "WRONG_HINT_PREFIX [word tip]".
export const REDO_MESSAGE_PRACTICE = "<p>Try choosing the other word!</p>";
