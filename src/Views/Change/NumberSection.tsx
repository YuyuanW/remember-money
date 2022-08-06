
import React from "react";
import _NumberSection from "./NumberSec/_NumberSection";
import { switcher } from "./switch";



type Props = {
  amount : number,
  onChange : (amount:number)=>void
  onOk?:()=>void;
}

const NumberSection:React.FC<Props> = (props)=>{
  const [number,setNum] = React.useState(props.amount.toString())
  // const number = props.amount.toString()
  // const setNum = props.onChange
  const numLength = (outProps:string)=>{
    let value :string;
    if(outProps.length > 16){
      value = outProps.slice(0,17)
    }else if(outProps.length===0){
      value = '0'
    }else{
      console.log(outProps) //存在小数点消失的问题
      value = outProps
    } 
    setNum(value)
    props.onChange(parseFloat(value))
  }

  const clickButton = (e:React.MouseEvent)=>{
    const text =  (e.target as  HTMLButtonElement).textContent
    if(!text){return}
    if('0123456789'.split('').concat(['删除','清空','.']).indexOf(text) >=0){
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
        <button className="ok" onClick={props.onOk}>OK</button>
        <button>0</button>
        <button>.</button>
        <button>%</button>
        <button>÷</button>
      </div>      
    </_NumberSection>
  )
}
export default NumberSection;