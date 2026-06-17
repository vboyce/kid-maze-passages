// passages and practice_distractors are auto-generated — run generate_stimuli.py to update.
import { passages } from "./passages.js";
export { passages };
import { PRACTICE_DISTRACTORS } from "./practice_distractors.js";

const IMAGE_BASE_URL =
  "https://raw.githubusercontent.com/vboyce/kid-maze-passages/main/experiment/assets/images/";

// Practice sentences — 3-level guided progression.
// Instructions text is placeholder; finalize before launch.
export const PRACTICE_SENTENCES = [
  {
    level: 1,
    sent: "The cat sat on the mat.",
    distractor: PRACTICE_DISTRACTORS[0],
    order: [0, 0, 1, 0, 0, 1],
    img: "cat.jpg",
    credit: "by Elisa (https://www.flickr.com/photos/37996605603@N01/, CC-BY-NC)",
    // TODO: finalize kid-friendly instruction text and word tips
    instruction:
      "<h2>Let's try it together first!</h2>" +
      "<p>You'll see two words at a time. One belongs in the sentence — pick it!</p>" +
      "<p>Press <b>E</b> for the word on the left, <b>I</b> for the word on the right.</p>" +
        `<p>If you see "---" that's not a real word, so pick the other word!</p>` +
      `<img src="${IMAGE_BASE_URL}keyboard_hand.jpg"` +
      ` alt="Hands on a keyboard with E and I highlighted" style="width:70%;max-height:40vh;display:block;margin:16px auto;">`,
    word_tips: [
      "The sentence starts with <b>The</b> — find it!",
      "Great! Now what makes sense after 'The' ... how about <b>cat</b>.",
      "Awesome! Now we have 'The cat', so what belongs next -- vary or <b>sat</b>?",
      "What word comes next -- <b>on</b> or help?",
      "What word belongs here -- the or goes?",
      "What word finishes the sentence?",
    ],
  },
  {
    level: 2,
    sent: "The dog barked at a squirrel.",
    distractor: PRACTICE_DISTRACTORS[1],
    order: [0, 0, 1, 0, 0, 0],
    img: "dog.jpg",
    credit: "by Mark Robinson (https://www.flickr.com/photos/66176388@N00/, CC-BY-NC)",
    // TODO: finalize kid-friendly instruction text
    instruction:
      "<h2>Your turn!</h2>" +
      "<p>Now you try it — pick the words that fit the sentence.</p>" +
              `<p>If you see "---" that's not a real word, so pick the other word!</p>` +
      "<p>If you need a hint, you can watch the sentence build up at the top as you go!</p>",
  },
  {
    level: 3,
    sent: "The bunny rabbit nibbled a carrot.",
    distractor: PRACTICE_DISTRACTORS[2],
    order: [0, 0, 0, 0, 1, 0],
    img: "bunny.jpg",
    credit: "by sunnyelou (https://www.flickr.com/photos/sunnyelou/, CC-BY-NC)",
    // TODO: finalize kid-friendly instruction text
    instruction:
      "<h2>One more time — on your own!</h2>" +
      "<p>This time, the sentence won't build up at the top. Just pick the words that belong. You've got this!</p>",
  },
];

export const PRACTICE_IMAGES = PRACTICE_SENTENCES
  .map((s) => s.img)
  .filter(Boolean)
  .map((f) => IMAGE_BASE_URL + f);

export const PASSAGE_IMAGES = passages
  .flatMap((p) => p.sentences)
  .map((s) => s.img)
  .filter(Boolean)
  .map((f) => IMAGE_BASE_URL + f);
