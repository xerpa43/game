import React, { useContext } from "react";
import { myContext } from "../App";

const Over = () => {
  const { final, example } = useContext(myContext);
  return (
    <div className="over">
      <h1>
        {final.guessed
          ? "CONGRATULATIONS YOU GUESSED IT CORRECTLY"
          : "The word was " + example}
      </h1>
    </div>
  );
};

export default Over;
