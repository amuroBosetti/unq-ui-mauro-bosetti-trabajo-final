import React, {useEffect, useState} from "react";
import OptionSelector from "./pages/OptionSelector";


export const RandomOption = ({option}) => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(option !== ""){
      setIsLoading(true);
      setInterval(() => {
        setIsLoading(false)
        debugger
      }, 3000)
    }}, [option]);

  function optionImg() {
    return "/" + option.toLowerCase() + ".png";
  }

  if(isLoading && option !== ''){
    return <OptionSelector userSelection={""} interactive={false}/>
  }

  if(!isLoading && option !== ''){
    return <img src={optionImg()} alt={option} className={"confirmedOption"}/>
  }

  return null;

}