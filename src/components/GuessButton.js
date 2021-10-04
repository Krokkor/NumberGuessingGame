import React from "react";

const GuessButton = (props) => {

    return (
        <button className="guessButton" 
        onClick={props.guessButtonPressed}>Guess</button>
    )
}

export default GuessButton