import React, { useState } from "react";

import Popup from "./popup/Popup";
import Questions from "./questions/Questions";
import Footer from "./questions/Footer";

import "./App.css";

function App() {
  const [showQuestions, setShowQuestions] = useState(false);

  const handleShowQuestions = () => {
    setShowQuestions(true);
  };

  const handleRestart = () => {
    setShowQuestions(false);
  };

  return (
    <>
      {showQuestions ? (
        <>
          <Questions
            handleShowQuestions={handleShowQuestions}
            handleRestart={handleRestart}
          />
          <Footer />
        </>
      ) : (
        <Popup handleShowQuestions={handleShowQuestions} />
      )}
    </>
  );
}

export default App;
