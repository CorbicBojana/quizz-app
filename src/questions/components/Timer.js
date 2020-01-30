import React from "react";

function Timer(props) {
    const {countTime} = props;

return(<div className="timer">Timer : <span className="timer-count">{countTime}</span></div>)
}

export default Timer;