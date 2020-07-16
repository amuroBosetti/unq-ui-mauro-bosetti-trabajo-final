import React, {useState} from 'react';
import './App.css';
import OptionSelector from "./components/pages/OptionSelector";

function App() {

  const [userSelection, setUserSelection] = useState("")
  const [computerSelection, setComputerSelection] = useState("")

  const finishGame = () => {
    setComputerSelection("Lizard");
  }

  return (
    <>
      <h2>Choose carefully!</h2>
      <OptionSelector userSelection={userSelection} onUserSelection={setUserSelection}/>
      <h3>Your choice: {userSelection}</h3>
      <button onClick={() => finishGame()}>Submit</button>
      <h3>Computer's choice: {computerSelection}</h3>
    </>
  );
}

export default App;
