import {
  BrowserRouter as Router,
  HashRouter ,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

// import styled from "styled-components";

import Layout from "components/Layout";



function App() {
  return (
    <HashRouter>
      <div>
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
      </div>
    </HashRouter>
  );
}

function NoMatch(){
  return <h2>你再检查检查输入的路径呗~</h2>
}

function Tags() {
  return (
    <Layout>
      <h2>tag</h2>
    </Layout>
  );
}

function Change() {
  return  (
    <Layout>
      <h2>change</h2>
    </Layout>
  );
}

function Money() {
  return  (
    <Layout>
      <h2>money</h2>
    </Layout>
  );
}



export default App;