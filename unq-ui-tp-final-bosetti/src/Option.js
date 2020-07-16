import React from "react";

const Option = ({image, optionName, onHover, hoveredOption, onUserSelection}) => {

  function addUnselectedClass(classArray) {
    if (hoveredOption !== optionName && hoveredOption !== '') {
      classArray = classArray.concat(" unselectedOption")
    }
    return classArray;
  }

  function addBeatedClass(classArray) {
    if (true) { //TODO agregar señal visual de que opcion vence a cual otra
      classArray = classArray.concat(" beatedOption")
    }
    return classArray;
  }

  const classes = () => {
    let classArray = ["optionButton"]
    classArray = addUnselectedClass(classArray);
    classArray = addBeatedClass(classArray);
    return classArray.join('')
  }

  return (
    <button
      id={optionName}
      className={classes()}
      onMouseEnter={() => {
        onHover(optionName)
      }}
      onMouseLeave={() => {
        onHover('')
      }}
      onClick={() => {
        onUserSelection(optionName)
      }}>
      <img src={image} className="optionImage" alt={optionName}/>
    </button>
  )
}

export default Option