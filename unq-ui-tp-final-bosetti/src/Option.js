import React from "react";
import "./styles/option.css"

const Option = ({image, optionName, onHover, hoveredOption}) => {

  const classes = () => {
    let classArray = ["optionButton"]
    if (hoveredOption !== optionName && hoveredOption !== ''){
      classArray = classArray.concat(" unselectedOption")
    }
    return classArray.join('')
  }

  return (
    <button
      className={classes()}
      onMouseEnter={() => {
        onHover(optionName)
      }}
      onMouseLeave={() => {
        onHover('')
      }}>
      <img src={image} className="optionImage" alt={optionName}/>
    </button>
  )
}

export default Option