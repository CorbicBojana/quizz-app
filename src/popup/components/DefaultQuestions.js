import React from "react";

function DefaultQuestions(props) {
  const { handleShowQuestions } = props;

  return (
    <>
      <h1>Welcome to Quizz</h1>
      <p>
        This is a quiz application built using ReactJS.
        <br />
        <br />
      </p>
      <button className="button" onClick={handleShowQuestions}>
        Start the quiz
      </button>
    </>
  );
}

export default DefaultQuestions;
