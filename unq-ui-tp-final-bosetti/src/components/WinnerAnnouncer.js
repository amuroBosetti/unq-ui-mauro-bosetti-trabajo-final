import React from "react";
import {options} from "../domain/Options";
import "../styles/winnerAnnouncer.css"
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class OptionComparator {
  winsAgainst(option1, option2) {
    return (option1 === options.SCISSORS && (option2 === options.PAPER || option2 === options.LIZARD)) ||
      (option1 === options.PAPER && (option2 === options.ROCK || option2 === options.SPOCK)) ||
      (option1 === options.ROCK && (option2 === options.LIZARD || option2 === options.SCISSORS)) ||
      (option1 === options.LIZARD && (option2 === options.SPOCK || option2 === options.PAPER)) ||
      (option1 === options.SPOCK && (option2 === options.SCISSORS || option2 === options.ROCK));
  }
}

export const WinnerAnnouncer = ({userSelection, computerSelection, shouldRender, restartGame}) => {
  const optionComparator = new OptionComparator()

  if (!shouldRender) {
    return null
  }

  const resultText = () => {
    if (shouldRender && optionComparator.winsAgainst(userSelection, computerSelection)) {
      return "Good job, you've won!";
    } else if (shouldRender && optionComparator.winsAgainst(computerSelection, userSelection)) {
      return "You loose... want a rematch? ;)";
    } else if (shouldRender) {
      return "Draw! Ready for the tie-breaker?";
    }
  };

  return <>
    <h3 className={"resultText"}>{resultText()}</h3>
    <Grid container
          spacing={3}
          alignItems={"center"}
          justify={"center"}>
      <Grid item xs={6}><p className={"userTitle"}>You chose:</p></Grid>
      <Grid item xs={6}><p className={"CPUtitle"}>CPU chose:</p></Grid>
      <Grid item xs={6}><img className={"userImage"} src={"./" + userSelection.toLowerCase() + ".png"} alt={"Imagen de la opcion elegida por el jugador:" + userSelection}/></Grid>
      <Grid item xs={6}><img className={"CPUimage"} src={"./" + computerSelection.toLowerCase() + ".png"} alt={"Imagen de la opcion elegida por la computadora:" + computerSelection}/></Grid>
      <Grid item xs={6}><p className={"userTitle"}>{userSelection}</p></Grid>
      <Grid item xs={6}><p className={"userTitle"}>{computerSelection}</p></Grid>
    </Grid>
    <Button color={"primary"} variant={"contained"} onClick={(e) => {
      e.preventDefault()
      restartGame()
    }}>
      Play again
    </Button>
  </>;

}