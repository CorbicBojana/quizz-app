import React from "react";

function Answer(props) {
  const { data, nextQuestion, handleAnswer } = props;

  const answers = data[nextQuestion].incorrect_answers.map((answer, x) => (
    <li onClick={handleAnswer} key={x}>
      {answer}
    </li>
  ));

  return (
    <div className="answer">
      <ul>
        {answers}
        <li className="answer-list" onClick={handleAnswer}>
          {data[nextQuestion].correct_answer}
        </li>
      </ul>
    </div>
  );
}

export default Answer;
