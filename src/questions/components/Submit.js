import React from "react";

function Submit(props) {
  const { isClicked, handleNextQuestion } = props;

  return (
    <div className="submit">
      {isClicked ? (
        <button className="button" onClick={handleNextQuestion}>
          Next Question
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Submit;
