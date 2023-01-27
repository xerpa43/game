import React, { useCallback, useContext, useEffect } from "react";
import Keys from "./Keys";
import { myContext } from "../App";

const Keyboard = () => {
  const firstRowKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondRowKeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdRowKeys = ["Z", "X", "C", "V", "B", "N", "M"];
  const { keyEnter, keyDel, keyInput, disabled } = useContext(myContext);

  const handleKeydown = useCallback((event) => {
    if (event.key === "Enter") {
      keyEnter();
    } else if (event.key === "Backspace") {
      keyDel();
    } else {
      firstRowKeys.forEach((keys) => {
        if (event.key.toUpperCase() === keys) {
          keyInput(keys);
        }
      });
      secondRowKeys.forEach((keys) => {
        if (event.key.toUpperCase() === keys) {
          keyInput(keys);
        }
      });
      thirdRowKeys.forEach((keys) => {
        if (event.key.toUpperCase() === keys) {
          keyInput(keys);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [handleKeydown]);

  return (
    <div className="keyboard">
      <div className="firstRow">
        {firstRowKeys.map((value, key) => {
          return (
            <Keys key={key} keys={value} status={disabled.includes(value)} />
          );
        })}
      </div>

      <div className="secondRow">
        {secondRowKeys.map((value, key) => {
          return (
            <Keys key={key} keys={value} status={disabled.includes(value)} />
          );
        })}
      </div>
      <div className="thirdRow">
        <Keys keys={"ENTER"} />
        {thirdRowKeys.map((value, key) => {
          return (
            <Keys key={key} keys={value} status={disabled.includes(value)} />
          );
        })}
        <Keys keys={"DEL"} />
      </div>
    </div>
  );
};

export default Keyboard;
