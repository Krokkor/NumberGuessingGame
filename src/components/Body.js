import React from 'react';
// import InputField from './InputField';
// import GuessButton from './GuessButton';
import Start from './Start';
import { useState, useEffect } from 'react';



const Body = () => {
   
  //uncommenttaa ja poista testStart.js jos haluat palauttaa vanhaan.

  // const guessButtonPressed = () => {
    
  //   let number = document.getElementById("inputField").value
  //   document.getElementById("inputField").value = "";
  //   //console.log(typeof(parseInt(input)))
    
  //   if (isValidNumber(parseInt(number))){
  //     checkIfCorrect(number);
  //     console.log(number);
  //   }
  //   props.guessedNumbers.sort();
  //   document.getElementById("wrongGuesses").innerHTML = `${props.guessedNumbers}`;
  // }

  // const isValidNumber = (number) => {
  //   if(isNaN(number) || number > 100 || number < 0 ){
  //     console.log(`${number} is not a number or out of range`);
  //     document.getElementById("messageBox").innerHTML = "Must be a number, and a number in range of 1-100";
  //     return false

  //   }else if(props.guessedNumbers.includes(number)){
  //     console.log(`${number} was in an array`);
  //     document.getElementById("messageBox").innerHTML = "Number already guessed.";
  //     return false

  //   }else{
  //     props.guessedNumbers.push(number);
  //     return true
  //   }
  // }

  // const checkIfCorrect = (guessedNumber) => {
  //   if(guessedNumber == props.secretNumber){
  //     console.log(`${guessedNumber} is correct`);
  //     document.getElementById("messageBox").innerHTML = `your number ${guessedNumber} 
  //     was correct and you won with ${props.guessedNumbers.length} guesses`;
  //   }else {
  //     if (guessedNumber < props.secretNumber){
  //     console.log(`${guessedNumber} was smaller`);
  //       document.getElementById("messageBox").innerHTML = "Your guessed number was smaller!"
  //     } else{
  //     console.log(`${guessedNumber} was higher`);
  //     document.getElementById("messageBox").innerHTML = "Your guessed number was larger!"
  //     }
  //   }
  // }
  
  //useState test. setX on melkeempä funktio, ja sitä edeltävä variable
  // const [stateTest, setStateTest] = useState(false);
  // const [num, setNum] = useState(1);

  // const testClick = () => {
  //   setStateTest(!stateTest);
  //   //console.log(stateTest);
  // }

  // const changeNum = () => {
  //   setNum(num + 1);
  // }

  // useEffect(()=>{
  //   //runs when num is changed
  //   console.log("num changed: " + num)
  // },[num]);

  // useEffect(()=> {
  //   document.title = Math.random().toString(16);
  // }, [stateTest, num]);

  const [showGame, setShowGame] = useState(false);

  useEffect(() => {
    if(!showGame){
      document.title = "Number guessing game.";
    }else{
      document.title = "Game on!";
    }  
  }, [showGame]);

    return (
        <div className="containerStart">
          
          {/* tekee napin joka mounttaa testStart.js:n ja aloittaa pelin */}
          <button onClick={() => setShowGame(!showGame)} className="startButton">
            {showGame ? "Close game" : "Start game"}
          </button>
          {showGame && <Start />}

          {/* <div>
          <InputField /> 
          <GuessButton guessButtonPressed={guessButtonPressed} />
          </div>
          
          <div id="messageBoxDefault">Use only numbers!</div>
          <div id="messageBox"></div>
          <div id="wrongGuessesDefault">Guessed numbers:</div>
          <div id="wrongGuesses"></div> */}

          {/* <h3 onClick={testClick}>Click to test:</h3>
          <div onClick={changeNum}>Testing state: {stateTest ? 'True' : 'False'}</div> */}
    
        </div>
    )
}

export default Body