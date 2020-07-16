import React from "react";
import {options} from "../domain/Options";

class OptionComparator {
  winsAgainst(option1, option2){
    return (option1 === options.SCISSORS && (option2 === options.PAPER || option2 === options.LIZARD)) ||
      (option1 === options.PAPER && (option2 === options.ROCK || option2 === options.SPOCK)) ||
      (option1 === options.ROCK && (option2 === options.LIZARD || option2 === options.SCISSORS)) ||
      (option1 === options.LIZARD && (option2 === options.SPOCK || option2 === options.PAPER)) ||
      (option1 === options.SPOCK && (option2 === options.SCISSORS || option2 === options.ROCK));
  }
}

export const WinnerAnnouncer = ({userSelection, computerSelection, isLoadingResults}) => {
  const optionComparator = new OptionComparator()

  function shouldRenderResult() {
    return !isLoadingResults && userSelection !== "" && computerSelection !== "";
  }

  if(!shouldRenderResult()){
    return null
  }

  if(shouldRenderResult() && optionComparator.winsAgainst(userSelection, computerSelection)){
    return <p>Ganaste</p>
  } else if(shouldRenderResult() && optionComparator.winsAgainst(computerSelection, userSelection)) {
    return <p>Perdiste</p>
  }else{
     return <p>Empate!</p>
  }

}