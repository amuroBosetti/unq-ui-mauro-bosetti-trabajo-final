import Dialog from "@material-ui/core/Dialog";
import React from "react";
import '../styles/rulesHelper.css'
import Button from "@material-ui/core/Button";

export const RulesHelper = ({shouldShowRules, setShouldShowRules}) => {

  return (
    <Dialog
      open={shouldShowRules}
      children={
        <div className={'rulesContainer'}>
          <h2>How do I play this game?</h2>
          <p>It's like regular Rock, Paper, Scissors, but with more options! Just pick one, and see if you can win
            against a computer!</p>
          <p>Since there are 5 options instead of the classic 3, each option wins against other two, and is defeated
            by two. If you need help figuring out who beats who, try with this handy sheet:</p>
          <img src={"https://i.pinimg.com/originals/d2/11/56/d21156a2a6a6fc187ca8934be97c409a.jpg"}
               alt={"Rules description"}
               className={'rulesImage'}/>
          <Button className={"rulesButton"} variant={"contained"} color={"primary"} onClick={() => setShouldShowRules(false)}>I GOT IT</Button>
        </div>}
    />
  )


}

