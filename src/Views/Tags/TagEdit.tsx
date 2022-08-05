import Layout from "components/Layout";
import useTags from "./useTags";

import React from "react";
// import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

type Params = {
    id : string
}

const TagEdit = ()=>{
    const {tags} = useTags();
    let { id } = useParams<Params>(); 
    const tag  = tags.filter(t=>t.id===parseInt(id))[0]

    return (
        <Layout>
            <div>{tag.name}</div>
        </Layout>
    )
    
}
export default TagEdit;