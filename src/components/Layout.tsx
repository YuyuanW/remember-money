import styled from "styled-components";
import Nav from 'components/Navcomp';
const Div = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
`

const Content = styled.div`
flex-grow: 1;  //用增长系数来分配剩余空间
`


const Layout = (props: { children: any; })=>{
    return (
        <Div>
          <Content>
            {props.children}
          </Content>
          <Nav/>
        </Div>
    );
}

export default Layout;