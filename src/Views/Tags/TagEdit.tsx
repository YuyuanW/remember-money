import Layout from "components/Layout";
import useTags from "./useTags";

// import React from "react";
// import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Icon from "components/Icon";
import Button from "lib/Button";
import styled from "styled-components";
import Input from "lib/Input";
import Tags from "Views/Tags";

const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    > span{
        font-family: 'Source Han Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        display: flex;
        align-items: center;
        color: #333333;

        padding: 16px 0px;
        line-height: 16px;
   }
   > svg{
        width: 24px;
        height: 24px;
    }
`


type Params = {
    id : string
}

const TagEdit = ()=>{
    const {findId} = useTags();
    let { id } = useParams<Params>(); 
    const tag  = findId(parseInt(id))
    return (
        <Layout>
            
            <header>
            <TopBar>
                <Icon name='left'></Icon>
                <span>编辑标签</span>
                <Icon></Icon>
            </TopBar>
            </header>
           <Input label='标签名' type="text" 
                value={tag.name}
                onChange={()=>{}}></Input>
            <Button>删除标签</Button>
        </Layout>
    )
    
}
export default TagEdit;