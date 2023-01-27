import React from "react";

const Manual = () => {
  return (
    <div className="Manual">
      <div>
        <p>
          A random word is generated every time a new game begins and You have
          to guess it
        </p>
      </div>
      <center>What does a colour resemble?</center>
      <div className="boxes">
        <div className="yellow">
          <p>
            The Letter is present in the word, but It is not at correct
            position.
          </p>
        </div>
        <div className="green">
          <p>The Letter is in the word and It is at it's correct position.</p>
        </div>
        <br />
        <div className="empty">
          <p>The Letter doesn't exist in the word.</p>
        </div>
      </div>
    </div>
  );
};

export default Manual;
