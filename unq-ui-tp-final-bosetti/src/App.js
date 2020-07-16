import React, {useState} from 'react';
import './App.css';
import OptionSelector from "./components/pages/OptionSelector";
import {options} from "./domain/Options";
import {WinnerAnnouncer} from "./components/WinnerAnnouncer";
import {RandomOption} from "./components/RandomOption";

function App() {

  const [userSelection, setUserSelection] = useState("")
  const [computerSelection, setComputerSelection] = useState("")
  const [isLoadingResults, setIsLoadingResults] = useState(false)

  const submitUserSelection = () => {
    let keys = Object.keys(options)
    let randomOption = options[keys[Math.floor(Math.random() * keys.length)]];
    setComputerSelection(randomOption);
    setIsLoadingResults(true);
  }

  const selectedOptionText = () => {
    if(userSelection !== ""){
      return <h3>{userSelection.toUpperCase()}</h3>
    }
  }

  function restartGame() {
    setUserSelection("");
    setComputerSelection("");
  }

  return (
    <>
      <h3 className={"choiceText"}>YOUR CHOICE</h3>
      <OptionSelector userSelection={userSelection} onUserSelection={setUserSelection}/>
      <button className={"submitButton"} onClick={() => submitUserSelection()}>SUBMIT</button>
      <h3>Computer's choice: {computerSelection}</h3>
      <RandomOption option={computerSelection}/>
      <WinnerAnnouncer userSelection={userSelection} computerSelection={computerSelection} isLoadingResult={isLoadingResults}/>
      <button onClick={() => restartGame()}>Play again</button>
    </>
  );
}

export default App;
