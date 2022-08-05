import React from "react"
import styled from "styled-components"

const Label = styled.label`
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
`

type Props = {
    label : string,
} & React.InputHTMLAttributes<HTMLInputElement>

const Input:React.FC<Props> = (props)=>{
    const {label,children,...rest}  = props
    return (
        <Label>
              <span>备注</span>
              <input {...rest} />
        </Label>
    )
}

export default Input;

