import React, {useState} from 'react';
import './App.css';
import UserOptionSelector from "./components/pages/UserOptionSelector";
import {options} from "./domain/Options";
import {WinnerAnnouncer} from "./components/WinnerAnnouncer";
import {ComputerOptionSelector} from "./components/ComputerOptionSelector";
import Dialog from "@material-ui/core/Dialog";
import {ThemeProvider} from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {TopNavbar} from "./components/TopNavbar";

function App() {

  const [userSelection, setUserSelection] = useState(options.NULL_OPTION)
  const [computerSelection, setComputerSelection] = useState(options.NULL_OPTION)
  const [shouldShowRules, setShouldShowRules] = useState(false);
  const [isLoadingResults, setIsLoadingResults] = useState(false)

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#8093F1'
      }
    }
  });

  const submitUserSelection = (option) => {
    setUserSelection(option);
    setIsLoadingResults(true);
    let keys = Object.keys(options).filter((element) => element !== "NULL_OPTION")
    let randomOption = options[keys[Math.floor(Math.random() * keys.length)]];
    setComputerSelection(randomOption);

  }
  const restartGame = () => {
    setIsLoadingResults(false);
    setUserSelection(options.NULL_OPTION);
    setComputerSelection(options.NULL_OPTION);

  }
  const shouldRenderWinnerAnnouncer = () => {
    return userSelection !== options.NULL_OPTION && computerSelection !== options.NULL_OPTION && !isLoadingResults;
  };

  return (
    <ThemeProvider theme={theme}>
      <TopNavbar onClick={setShouldShowRules}/>
      <h3 className={"choiceText"}>CHOOSE AN OPTION!</h3>
      <UserOptionSelector userSelection={userSelection} onUserSelection={submitUserSelection} interactive/>
      <ComputerOptionSelector option={computerSelection}
                              isLoading={isLoadingResults}
                              setIsLoading={setIsLoadingResults}/>
      <Dialog
        open={shouldRenderWinnerAnnouncer()}
        children={<WinnerAnnouncer userSelection={userSelection}
                                   computerSelection={computerSelection}
                                   shouldRender={shouldRenderWinnerAnnouncer()}
                                   restartGame={restartGame}
        />}
      />

      <Dialog
        open={shouldShowRules}
        children={
          <div>
            <h2>How do I play this game?</h2>
            <p>It's like regular Rock, Paper, Scissors, but with more options! Just pick one, and see if you can win
              against a computer!</p>
            <p>Since there are 5 options instead of the classic 3, each option wins against other two, and is defeated
              by two. If you need help figuring out who beats who, try with this handy sheet:</p>
            <img src={"https://i.pinimg.com/originals/d2/11/56/d21156a2a6a6fc187ca8934be97c409a.jpg"}
                 alt={"Rules description"}/>
          </div>}
      />
    </ThemeProvider>
  );
}

export default App;
