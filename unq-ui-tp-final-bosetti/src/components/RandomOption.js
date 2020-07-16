import React from "react";

export const RandomOption = ({option}) => {
  function optionImg() {
    return "/" + option.toLowerCase() + ".png";
  }

  return <img src={optionImg()} alt={option} className={"confirmedOption"}/>
}