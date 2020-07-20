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
import {RulesHelper} from "./components/RulesHelper";

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
      <div className={"selectionContainer"}>
        <UserOptionSelector userSelection={userSelection} onUserSelection={submitUserSelection} interactive/>
        <ComputerOptionSelector option={computerSelection}
                                isLoading={isLoadingResults}
                                setIsLoading={setIsLoadingResults}/>
      </div>
      <Dialog
        open={shouldRenderWinnerAnnouncer()}
        children={<WinnerAnnouncer userSelection={userSelection}
                                   computerSelection={computerSelection}
                                   shouldRender={shouldRenderWinnerAnnouncer()}
                                   restartGame={restartGame}
        />}
      />
      <RulesHelper shouldShowRules={shouldShowRules} setShouldShowRules={setShouldShowRules}/>
    </ThemeProvider>
  );
}

export default App;
