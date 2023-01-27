import React, { useEffect } from "react";
import { myContext } from "../App";
import { useContext } from "react";
const Keys = ({ keys, status, enable }) => {
  const { keyInput, keyDel, keyEnter } = useContext(myContext);
  const select = (event) => {
    if (keys === "ENTER") {
      keyEnter();
    } else if (keys === "DEL") {
      keyDel();
    } else {
      keyInput(event.target.innerText);
    }
  };

  return (
    <div className="keyWord" id={status ? "no" : ""} onClick={select}>
      {keys}
    </div>
  );
};

export default Keys;
