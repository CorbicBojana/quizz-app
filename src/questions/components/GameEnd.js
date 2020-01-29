import React from "react";

function GameEnd(props) {
  const { score, data, handleRestart } = props;

  return (
    <div className="popup-container">
      <div className="popup">
        <h1>Congratulations!</h1>
        <p>
          You have completed the quiz.
          <br />
          <br />
          You got:{" "}
          <span
            className="popup-score"
            style={score > score / 2 ? { color: "red" } : { color: "green" }}
          >
            {score}
          </span>
          out of <span className="popup-score">{data.length}</span> questions
          right.
          <br />
          <br />
        </p>
        <button className="button" onClick={handleRestart}>
          Restart
        </button>
      </div>
    </div>
  );
}

export default GameEnd;
