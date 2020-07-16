import React, {useState} from "react";
import Option from "../../Option";
import "../../styles/option.css"
import {options} from "../../domain/Options";

const OptionSelector = ({userSelection, onUserSelection}) => {

  const [hoveredOption, setHoveredOption] = useState('')

  const onSelectedOption = (optionName) => {
    onUserSelection(optionName)
  }

  if (userSelection !== "") {
    return <img className="confirmedOption" src={"/" + userSelection.toLowerCase() + ".png"} alt={userSelection}/>;
  }
  return <div className="optionsContainer">
          <p className={"optionDescription"}>{hoveredOption}</p>
          <Option image={"/scissors.png"} optionName={options.SCISSORS} onHover={setHoveredOption} hoveredOption={hoveredOption} onUserSelection={onUserSelection}/>
          <Option image={"/paper.png"} optionName={options.PAPER} onHover={setHoveredOption} hoveredOption={hoveredOption} onUserSelection={onUserSelection}/>
          <Option image={"/rock.png"} optionName={options.ROCK} onHover={setHoveredOption} hoveredOption={hoveredOption} onUserSelection={onUserSelection}/>
          <Option image={"/lizard.png"} optionName={options.LIZARD} onHover={setHoveredOption} hoveredOption={hoveredOption} onUserSelection={onUserSelection}/>
          <Option image={"/spock.png"} optionName={options.SPOCK} onHover={setHoveredOption} hoveredOption={hoveredOption} onUserSelection={onUserSelection}/>
    </div>



}

export default OptionSelector