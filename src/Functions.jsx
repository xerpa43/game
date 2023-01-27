import word from "./../src/words.txt";
export const Functions = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
export const randomWords = async () => {
  let words;
  let todays;
  await fetch(word)
    .then((data) => data.text())
    .then((result) => {
      let sentences = result.replace(/\r/g, "");

      sentences = sentences.split("\n");
      todays = sentences[Math.floor(Math.random() * sentences.length)];
      words = new Set(sentences);
    });
  return { words, todays };
};
