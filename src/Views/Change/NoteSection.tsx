import styled from "styled-components";
import React from "react";
import Input from "lib/Input";


const _NoteSection = styled.section`
  background: #F5F5F5;
`

type Props = {
  notes:string,
  onChange:(notes:string)=>void
}

const NoteSection:React.FC<Props> = (props)=>{
    const note = props.notes
    const setNode = props.onChange
    return (
        <_NoteSection>
          <Input label='备注' type="text" placeholder='在这里新增备注'
                value={note}
                onChange={(e)=>setNode(e.target.value)}
          >
            
          </Input>

          
            {/* <label>
              <span>备注</span>
              <input type="text" placeholder='在这里新增备注'
                value={note}
                onChange={(e)=>setNode(e.target.value)}
              />
            </label> */}
        </_NoteSection>
    )
}

export default NoteSection;

// React onChange是在你输入一个字的时候就触发
// HTML onChange是在你鼠标移走的时候才会触发
