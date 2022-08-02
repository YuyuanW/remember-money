import {
  BrowserRouter as Router,
  HashRouter ,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

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


function App() {
  return (
    <HashRouter>
      <Div>
        <Content>
          <Switch>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/change">
              <Change />
            </Route>
            <Route path="/money">
              <Money />
            </Route>
            <Redirect exact from='/' to="/change" />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Content>
        <Nav/>
      </Div>
    </HashRouter>
  );
}

function NoMatch(){
  return <h2>你再检查检查输入的路径呗~</h2>
}

function Tags() {
  return <h2>tag</h2>;
}

function Change() {
  return <h2>change</h2>;
}

function Money() {
  return <h2>money</h2>;
}



export default App;