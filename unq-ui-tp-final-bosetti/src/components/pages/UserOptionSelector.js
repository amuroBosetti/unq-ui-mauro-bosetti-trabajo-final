import React, {useState} from "react";
import Option from "../../Option";
import "../../styles/option.css"
import {options} from "../../domain/Options";
import CircularProgress from "@material-ui/core/CircularProgress";

const UserOptionSelector = ({userSelection, onUserSelection, interactive}) => {

  const [hoveredOption, setHoveredOption] = useState('')

  const hoverFunctionIfShouldHaveHoverEffect= () => {
    return interactive ? setHoveredOption : () => {}
  }

  const hoveredOptionIfShouldHaveHoverEffect = () => {
    return interactive ? hoveredOption : "Ninguno"
  }

  const onSelectedOption = (optionName) => {
    onUserSelection(optionName)
    setHoveredOption(options.NULL_OPTION)
  }

  const finalImage = () => {
    return <img className="confirmedOption" src={"/" + userSelection.toLowerCase() + ".png"} alt={userSelection}/>;
  }

  const optionsContainer = () => {
    return <div className="optionsContainer">
      {getCentralTooltip()}
      <Option image={"/scissors.png"} optionName={options.SCISSORS} onHover={hoverFunctionIfShouldHaveHoverEffect()}
              hoveredOption={hoveredOptionIfShouldHaveHoverEffect()} onUserSelection={onSelectedOption}/>
      <Option image={"/paper.png"} optionName={options.PAPER} onHover={hoverFunctionIfShouldHaveHoverEffect()} hoveredOption={hoveredOptionIfShouldHaveHoverEffect()}
              onUserSelection={onSelectedOption}/>
      <Option image={"/rock.png"} optionName={options.ROCK} onHover={hoverFunctionIfShouldHaveHoverEffect()} hoveredOption={hoveredOptionIfShouldHaveHoverEffect()}
              onUserSelection={onSelectedOption}/>
      <Option image={"/lizard.png"} optionName={options.LIZARD} onHover={hoverFunctionIfShouldHaveHoverEffect()} hoveredOption={hoveredOptionIfShouldHaveHoverEffect()}
              onUserSelection={onSelectedOption}/>
      <Option image={"/spock.png"} optionName={options.SPOCK} onHover={hoverFunctionIfShouldHaveHoverEffect()} hoveredOption={hoveredOptionIfShouldHaveHoverEffect()}
              onUserSelection={onSelectedOption}/>
    </div>
      ;
  }

  const getCentralTooltip = () => {
    if (interactive) {
      return <p className={"optionDescription"}>{hoveredOption}</p>
    } else {
      return <CircularProgress className={"optionDescription"}/>
    }
  }

  if (userSelection !== "") {
    return finalImage()
  } else {
    return optionsContainer()
  }

}

export default UserOptionSelector