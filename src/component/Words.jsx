import { myContext } from "../App";
import { useContext, useEffect } from "react";
const Words = ({ letterPosition, totalAttempt }) => {
  const { words, example, input, setDisabled } = useContext(myContext);
  const letter = words[letterPosition][totalAttempt];
  const correct = example[totalAttempt] === letter;
  const near = !correct && letter !== "" && example.includes(letter);
  const state =
    input.try > letterPosition && (correct ? "correct" : near ? "near" : "no");
  useEffect(() => {
    if (letter !== "" && !correct && !near && !undefined) {
      setDisabled((prev) => [...prev, letter]);
    }
  }, [input.try]);

  return <div className={state ? state : ""}>{letter}</div>;
};

export default Words;
