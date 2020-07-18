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

export const WinnerAnnouncer = ({userSelection, computerSelection, shouldRender, restartGame}) => {
  const optionComparator = new OptionComparator()

  if(!shouldRender){
    return null
  }

  const resultText = () => {
    if (shouldRender && optionComparator.winsAgainst(userSelection, computerSelection)) {
      return "Ganaste";
    } else if (shouldRender && optionComparator.winsAgainst(computerSelection, userSelection)) {
      return "Perdiste";
    } else if (shouldRender){
      return "Empate!";
    }
  };

  return <>
    <p>{resultText()}</p>
    <button onClick={(e) => {
      e.preventDefault()
      restartGame()
    }}>
      Play again
    </button>
  </>;

}