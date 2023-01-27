import "./App.css";
import Keyboard from "./component/keyboard";
import Grid from "./component/grid";
import { createContext, useEffect, useState } from "react";
import { Functions, randomWords } from "../src/Functions";
import Over from "./component/over";
import Wrong from "./component/wrong";
import Manual from "./component/manual";

export const myContext = createContext();
function App() {
  const [words, setWords] = useState(Functions);
  const [input, setInput] = useState({ try: 0, position: 0 });
  const [getwords, setGetwords] = useState(new Set());
  const [disabled, setDisabled] = useState([]);
  const [final, setFinally] = useState({ over: false, guessed: false });
  const [wrong, setWrong] = useState(false);
  const [manual, setManual] = useState(false);

  const [example, setExample] = useState("");
  useEffect(() => {
    randomWords().then((words) => {
      setGetwords(words.words);
      setExample(words.todays);
    });
  }, []);

  const keyInput = (event) => {
    const newWords = { ...words };

    if (input.position > 4) return;

    newWords[input.try][input.position] = event;
    setWords(newWords);

    setInput({ ...input, position: input.position + 1 });
  };
  const keyDel = () => {
    if (input.position === 0) return;
    const tempArr = { ...words };
    tempArr[input.try][input.position - 1] = " ";
    setWords(tempArr);
    setInput({ ...input, position: input.position - 1 });
  };

  const keyEnter = () => {
    if (input.position !== 5) return;
    let check = "";
    for (let i = 0; i < 5; i++) {
      check += words[input.try][i];
    }

    if (getwords.has(check)) {
      setInput({ try: input.try + 1, position: 0 });
    } else {
      setWrong(true);
      return;
    }

    if (check === example) {
      setFinally({ over: true, guessed: true });
      return;
    }

    if (input.try === 4) {
      setFinally({ over: true, guessed: false });
      return;
    }
  };

  return (
    <myContext.Provider
      value={{
        words,
        setWords,
        input,
        setInput,
        keyEnter,
        keyDel,
        keyInput,
        example,
        setDisabled,
        disabled,
        final,
        setWrong,
        wrong,
        manual,
        setManual,
      }}
    >
      <div className="App">
        <nav>
          <h2>Guess the random WORD</h2>
        </nav>
        <Grid />
        {manual ? <Manual /> : ""}

        {wrong ? <Wrong /> : ""}
        {final.over ? <Over /> : <Keyboard />}
      </div>
    </myContext.Provider>
  );
}

export default App;
