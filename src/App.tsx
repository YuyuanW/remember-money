import {
  BrowserRouter as Router,
  HashRouter ,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

// import styled from "styled-components";

// import Layout from "components/Layout";
import Tags from "Views/Tags";
import Change from "Views/Change";
import Money from "Views/Money";
import NoMatch from "Views/NoMatch";
import TagEdit from "Views/Tags/TagEdit";



function App() {
  return (
    <HashRouter>
      <div>
          <Switch>
          <Route exact path="/tags/:id">
              <TagEdit />
            </Route>
            <Route exact path="/tags">
              <Tags />
            </Route>
            <Route exact path="/change">
              <Change />
            </Route>
            <Route exact path="/money">
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

export default App;