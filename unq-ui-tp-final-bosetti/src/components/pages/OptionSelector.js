import React, {useState} from "react";
import Option from "../../Option";
import "../../styles/option.css"

const OptionSelector = ({userSelection, onUserSelection}) => {

  const [hoveredOption, setHoveredOption] = useState('')
  const [hasSelectedOption, setHasSelectedOption] = useState(false)

  const onSelectedOption = (optionName) => {
    onUserSelection(optionName)
    setHasSelectedOption(true)
  }

  if (hasSelectedOption) {
    return <img className="confirmedOption" src={"/" + userSelection.toLowerCase() + ".png"} alt={userSelection}/>;
      }
  return <div className="optionsContainer">
          <p className={"optionDescription"}>{hoveredOption}</p>
          <Option image={"/scissors.png"} optionName={"Scissors"} onHover={setHoveredOption} hoveredOption={hoveredOption} onUserSelection={onSelectedOption}/>
          <Option image={"/paper.png"} optionName={"Paper"} onHover={setHoveredOption} hoveredOption={hoveredOption} onUserSelection={onSelectedOption}/>
          <Option image={"/rock.png"} optionName={"Rock"} onHover={setHoveredOption} hoveredOption={hoveredOption} onUserSelection={onSelectedOption}/>
          <Option image={"/lizard.png"} optionName={"Lizard"} onHover={setHoveredOption} hoveredOption={hoveredOption} onUserSelection={onSelectedOption}/>
          <Option image={"/spock.png"} optionName={"Spock"} onHover={setHoveredOption} hoveredOption={hoveredOption} onUserSelection={onSelectedOption}/>
    </div>



}

export default OptionSelector