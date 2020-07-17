import React, {useState} from "react";
import Option from "../../Option";
import "../../styles/option.css"
import {options} from "../../domain/Options";
import CircularProgress from "@material-ui/core/CircularProgress";

const OptionSelector = ({userSelection, onUserSelection, interactive}) => {

  const [hoveredOption, setHoveredOption] = useState('')

  const onSelectedOption = (optionName) => {
    onUserSelection(optionName)
    setHoveredOption('')
  }

  if (userSelection !== "") {
    return <img className="confirmedOption" src={"/" + userSelection.toLowerCase() + ".png"} alt={userSelection}/>;
  }

  function getCentralTooltip() {
    if (interactive) {
      return <p className={"optionDescription"}>{hoveredOption}</p>
    } else {
      return <CircularProgress className={"optionDescription"}/>
    }
  }

  const hoverFunctionIfShouldHaveHoverEffect= () => {
   return interactive ? setHoveredOption : () => {}
  }

  const hoveredOptionIfShouldHaveHoverEffect = () => {
    return interactive ? hoveredOption : "Ninguno"
  }

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

}

export default OptionSelector