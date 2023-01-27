import Words from "./Words";


const Grid = () => {
  return (
    <div className="wordRows">
        
      <div className="row">
        <Words letterPosition={0} totalAttempt={0} />
        <Words letterPosition={1} totalAttempt={0} />
        <Words letterPosition={2} totalAttempt={0} />
        <Words letterPosition={3} totalAttempt={0} />
        <Words letterPosition={4} totalAttempt={0} />
      </div>
      <div className="row">
        <Words letterPosition={0} totalAttempt={1} />
        <Words letterPosition={1} totalAttempt={1} />
        <Words letterPosition={2} totalAttempt={1} />
        <Words letterPosition={3} totalAttempt={1} />
        <Words letterPosition={4} totalAttempt={1} />
      </div>
      <div className="row">
        <Words letterPosition={0} totalAttempt={2} />
        <Words letterPosition={1} totalAttempt={2} />
        <Words letterPosition={2} totalAttempt={2} />
        <Words letterPosition={3} totalAttempt={2} />
        <Words letterPosition={4} totalAttempt={2} />
      </div>
      <div className="row">
        <Words letterPosition={0} totalAttempt={3} />
        <Words letterPosition={1} totalAttempt={3} />
        <Words letterPosition={2} totalAttempt={3} />
        <Words letterPosition={3} totalAttempt={3} />
        <Words letterPosition={4} totalAttempt={3} />
      </div>
      <div className="row">
        <Words letterPosition={0} totalAttempt={4} />
        <Words letterPosition={1} totalAttempt={4} />
        <Words letterPosition={2} totalAttempt={4} />
        <Words letterPosition={3} totalAttempt={4} />
        <Words letterPosition={4} totalAttempt={4} />
      </div>
      {/* <button
          className="aside"
          onClick={() => {
            setManual(!manual);
          }}
        >
       { manual ? "CLOSE": "HOW TO PLAY"}
        </button> */}
    </div>
  );
};

export default Grid;
