import styled from "styled-components";
import Nav from 'components/Navcomp';
import { useEffect } from "react";
import React from "react";
const Div = styled.div`
height: 100vh;
overflow-y:hidden ;
display: flex;
flex-direction: column;
`

const Content = styled.div`
overflow-y: scroll;

flex-grow: 1;  //用增长系数来分配剩余空间
`

type Props = {
   children?: any; 
   scrollTop?: number;
}

const Layout:React.FC<Props> = (props)=>{
  const mainRef = React.useRef<HTMLDivElement>(null)
  useEffect(()=>{
    setTimeout(() => {
      if(!mainRef.current){return;}
      mainRef.current.scrollTop= props.scrollTop!}
    , 0)}
    ,[props.scrollTop])
    return (
        <Div>
          <Content ref={mainRef}>
            {props.children}
          </Content>
          <Nav/>
        </Div>
    );
}

Layout.defaultProps = {
  scrollTop : 0
}

export default Layout;