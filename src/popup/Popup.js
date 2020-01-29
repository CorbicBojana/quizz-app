import React from "react";

import DefaultQuestions from "./components/DefaultQuestions";

function Popup(props) {
  const { handleShowQuestions } = props;

  return (
    <div className="popup-container">
      <div className="popup">
        <DefaultQuestions handleShowQuestions={handleShowQuestions} />
      </div>
    </div>
  );
}

export default Popup;
