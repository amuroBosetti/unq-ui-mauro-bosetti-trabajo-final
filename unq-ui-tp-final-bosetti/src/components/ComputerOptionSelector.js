import React, {useEffect} from "react";
import UserOptionSelector from "./pages/UserOptionSelector";
import "../App.css"


export const ComputerOptionSelector = ({option, isLoading, setIsLoading}) => {

  useEffect(() => {
    if(option !== ""){
      setIsLoading(true);
      setInterval(() => {
        setIsLoading(false)
      }, 3000)
    }}, [option]);

  function optionImg() {
    return "/" + option.toLowerCase() + ".png";
  }

  if(isLoading && option !== ""){
    return <div className={"computerSelector"}>
      <h3 className={"choiceText"}>CPU IS CHOOSING...</h3>
      <UserOptionSelector userSelection={""} interactive={false}/>
    </div>
  }

  if(!isLoading && option !== ""){
    return <div className={"computerSelector"}>
      <h3 className={"choiceText"}>CPU CHOSE {option.toUpperCase()}</h3>
      <img src={optionImg()} alt={option} className={"confirmedOption"}/>
    </div>
  }

  return null;

}