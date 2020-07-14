import React, {useState} from "react";
import Option from "../../Option";

const Game = () => {

  const [hoveredOption, setHoveredOption] = useState('')

  return <>
    <Option image={"/tijera.png"} optionName={"Scissors"} onHover={setHoveredOption} hoveredOption={hoveredOption}/>
    <Option image={"/tijera.png"} optionName={"Paper"} onHover={setHoveredOption} hoveredOption={hoveredOption}/>
    <Option image={"/tijera.png"} optionName={"Rock"} onHover={setHoveredOption} hoveredOption={hoveredOption}/>
    <Option image={"/tijera.png"} optionName={"Lizard"} onHover={setHoveredOption} hoveredOption={hoveredOption}/>
    <Option image={"/tijera.png"} optionName={"Spock"} onHover={setHoveredOption} hoveredOption={hoveredOption}/>
    </>
}

export default Game