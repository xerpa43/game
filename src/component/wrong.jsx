import React, { useContext } from "react";
import { myContext } from "../App";

const Wrong = () => {
  const { wrong, setWrong } = useContext(myContext);
  return (
    <div className="wrong">
      <h2>That word doesn't exist, Enter again</h2>
      <button
        onClick={() => {
          setWrong(!wrong);
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default Wrong;
