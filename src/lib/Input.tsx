import React from "react"
import styled from "styled-components"

const Label = styled.label`
    display: flex;
    flex-direction: row;
   
`

type Props = {
    label : string,
} & React.InputHTMLAttributes<HTMLInputElement>

const Input:React.FC<Props> = (props)=>{
    const {label,children,...rest}  = props
    return (
        <Label>
              <span>{props.label}</span>
              <input {...rest} />
        </Label>
    )
}

export default Input;

