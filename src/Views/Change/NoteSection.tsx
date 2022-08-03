import styled from "styled-components";
import React from "react";

const _NoteSection = styled.section`
  background: #F5F5F5;
  >label {
    display: flex;
    flex-direction: row;
    padding: 22px 16px;
    > span{
    font-family: 'Source Han Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #333333;
    padding-right:16px ;
    /* 设置不换行 */
    white-space: nowrap;  
    }
    >input{
      flex-grow:1;
      border: none;
      color: #999999;
      background-color: #F5F5F5;
      width:100%;
    }
  }
`
const NoteSection = ()=>{
    const [note,setNode] = React.useState<string>('')
    console.log(note)
    return (
        <_NoteSection>
            <label>
              <span>备注</span>
              <input type="text" placeholder='在这里新增备注'
                value={note}
                onChange={(e)=>setNode(e.target.value)}
              />
            </label>
        </_NoteSection>
    )
}

export default NoteSection;

// React onChange是在你输入一个字的时候就触发
// HTML onChange是在你鼠标移走的时候才会触发
