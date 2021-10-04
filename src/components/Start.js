import InputField from "./InputField";
import GuessButton from "./GuessButton";
import React from "react";

const Start = () => {
  
  const randomNumber = (min, max) =>{
    return Math.floor(Math.random() * (max - min) + min);
  }

  let secretNumber = randomNumber(1,101);
  let guessedNumbers = [];

  const guessButtonPressed = () => {
    let number = document.getElementById("inputField").value
    document.getElementById("inputField").value = "";
        
    if (isValidNumber(parseInt(number))){
      checkIfCorrect(number);
    }
    guessedNumbers.sort(function(a, b){return a - b});
    document.getElementById("wrongGuesses").innerHTML = `${guessedNumbers}`;
  }
    
  const isValidNumber = (number) => {
    if(isNaN(number) || number > 100 || number < 0 ){
      console.log(`${number} is not a number or out of range`);
      document.getElementById("messageBox").innerHTML = "Must be a number, and a number in range of 1-100";
      return false
    }else if(guessedNumbers.includes(number)){
      console.log(`${number} was in an array`);
      document.getElementById("messageBox").innerHTML = "Number already guessed.";
      return false
    }else{
      guessedNumbers.push(number);
      return true
    }
  }
    
  const checkIfCorrect = (guessedNumber) => {
    if(guessedNumber == secretNumber){
      console.log(`${guessedNumber} is correct`);
      document.getElementById("messageBox").innerHTML = `your number ${guessedNumber} 
      was correct and you won with ${guessedNumbers.length} guesses`;
    }else {
      if (guessedNumber < secretNumber){
        console.log(`${guessedNumber} was smaller`);
        document.getElementById("messageBox").innerHTML = "Your guessed number was smaller!"
      } else{
        console.log(`${guessedNumber} was higher`);
        document.getElementById("messageBox").innerHTML = "Your guessed number was larger!"
      }
    }
  }
    
  return (
    <div className="container">

    <div>
      <InputField /> 
      <GuessButton guessButtonPressed={guessButtonPressed} />
    </div>
          
      <div className="message1">Use only numbers!</div>
      <div id="messageBox" className="messageBox"></div>
      <div className="message2">Guessed numbers:</div>
      <div id="wrongGuesses" className="wrongGuesses"></div>
    </div>
    );
}

export default Start