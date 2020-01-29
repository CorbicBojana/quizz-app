import React, { useState, useEffect } from "react";

import Question from "./components/Question";
import Answer from "./components/Answer";
import Submit from "./components/Submit";
import GameEnd from "./components/GameEnd";

import instance from "../axios";

function Questions(props) {
  const [data, setData] = useState([]);
  const [nextQuestion, setNextQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const { handleRestart } = props;

  const getData = () => {
    instance
      .get(`?amount=8&category=18&difficulty=easy&type=multiple`)
      .then(response => {
        const data = response.data.results;
        setData(data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const changeStyle = document.getElementsByClassName("answer-list");

  const handleNextQuestion = () => {
    setNextQuestion(nextQuestion + 1);
    setIsClicked(false);
    changeStyle[0].style.backgroundColor = "#fff";
  };

  const handleAnswer = e => {
    setIsClicked(true);
    const correctAnswer = data[nextQuestion].correct_answer;
    const userAnswer = e.target.textContent;
    if (correctAnswer === userAnswer) {
      changeStyle[0].style.backgroundColor = "#0094da";
      setScore(score + 1);
    }
  };

  if (!data[0]) {
    return null;
  }

  return (
    <div className="questions">
      {nextQuestion + 1 <= data.length ? (
        <React.Fragment>
          <Question data={data} nextQuestion={nextQuestion} />
          <Answer
            data={data}
            nextQuestion={nextQuestion}
            handleAnswer={handleAnswer}
          />
          <Submit
            handleNextQuestion={handleNextQuestion}
            isClicked={isClicked}
          />
        </React.Fragment>
      ) : (
        <GameEnd score={score} data={data} handleRestart={handleRestart} />
      )}
    </div>
  );
}

export default Questions;
