
import React from "react";
import _NumberSection from "./NumberSec/_NumberSection";
import { switcher } from "./switch";

const NumberSection:React.FC = ()=>{
  const [number,setNum] = React.useState<string>('0')
  const numLength = (outProps:string)=>{
    if(outProps.length > 16){
      outProps = outProps.slice(0,17)
    }else if(outProps.length===0){
      outProps = '0'
    }
    setNum(outProps)
  }

  const clickButton = (e:React.MouseEvent)=>{
    const text =  (e.target as  HTMLButtonElement).textContent
    if(!text){return}
    if('0123456789.'.split('').concat(['删除','清空','OK']).indexOf(text) >=0){
      numLength(switcher(text,number)!)
    }
    
  }
  return (
    <_NumberSection>
      <div className="output">{number}</div>
      <div className="pad" onClick={clickButton}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>×</button>
        <button className="ok">OK</button>
        <button>0</button>
        <button>.</button>
        <button>%</button>
        <button>÷</button>
      </div>      
    </_NumberSection>
  )
}
export default NumberSection;