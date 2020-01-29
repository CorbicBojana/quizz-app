import React from "react";

function Question(props) {
  const { data, nextQuestion } = props;

  return (
    <div className="question">
      <h1>
        Question {nextQuestion + 1} / {data.length}
      </h1>
      <p>{data[nextQuestion].question}</p>
    </div>
  );
}

export default Question;
