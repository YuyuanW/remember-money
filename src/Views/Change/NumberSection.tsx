import styled from "styled-components";
import React from "react";

const _NumberSection = styled.section`
  bottom:0;
  /* border:1px solid blue; */
  background-color: #FFFFFF;

  display: flex;
  flex-direction: column;
  
  > .output{
    /* 设置字体 */
    font-family: 'Consolas';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 22px;
    color: #333333;

    padding:20px;
    padding-right:16px;

    text-align: right;
    box-shadow: 0 1px 3px rgba(0,0,0,0.25);

  }
  > .pad{
    margin: 2px 0;
    /* flex-grow: 1; */
    /* border:1px solid red; */
    height: 30vh;
    > button {
      float: left;
      width: 20%;
      height: 25%;
      /* 为什么我的grid布局没什么作用？ */

      font-family: 'Arial';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height, or 122% */
      text-align: center;
      color: #000000;

      border:none;

      &:nth-child(1){background: #F2F2F2;}
      &:nth-child(2),&:nth-child(6){background:#E0E0E0}
      &:nth-child(3),&:nth-child(7),&:nth-child(11){background:#D3D3D3}
      &:nth-child(4),&:nth-child(8),&:nth-child(12),&:nth-child(16){background:#C1C1C1}
      &:nth-child(5),&:nth-child(9),&:nth-child(13),&:nth-child(17){background:#B8B8B8}
      &:nth-child(10),&:nth-child(14),&:nth-child(18){background:#A9A9A9}
      &:nth-child(15){background:#8B8B8B;}
      &:nth-child(19){background:#9A9A9A;}
    }
    > .ok{
      float: right;
      height: 50%;
    }
  }
`

const NumberSection:React.FC = ()=>{
  const [number,setNum] = React.useState<string>('0')
  const clickButton = (e:React.MouseEvent)=>{
    const text =  (e.target as  HTMLButtonElement).textContent
    if(!text){return}
    switch(text){
      case '0' :
      case '1' :
      case '2' :
      case '3' :
      case '4' :
      case '5' :
      case '6' :
      case '7' :
      case '8' :
      case '9' :
        if(number==='0'){
          setNum(text)
        }
        else{setNum(number+text)}
        break;
      case '.' : 
        if(number.indexOf('.') < 0){setNum(number+text)}
        break;
      case '删除':
        if(number.length>1){setNum(number.slice(0,-1))}
        else{setNum('0')}
        break;
      case '清空':
        setNum('0')
        break;
      case 'OK':
        console.log('确认')
        break;
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