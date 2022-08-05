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
    background: #FFFFFF;
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
const InputStyle = styled.div`
    box-shadow: 1px 2px 4px rgb(221,221,221);
    > label{
        margin-left: 4px;
        margin-top: 8px;
        
        background: #FFFFFF;
        > span{
            font-family: 'Source Han Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            /* identical to box height, or 100% */
            display: flex;
            align-items: center;
            color: #333333;

            padding:10px 0px;
            margin:2px 12px;
        }
        >input{
            font-family: 'Source Han Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            display: flex;
            align-items: center;
            color: #333333;

            border:none;s
           
            
        }
    }
   
`

const ButtonStyle = styled.div`
    height: 100%;
    position: relative;
    background:#F5F5F5;
    >button{
        white-space: nowrap;
        /* border:1px solid red; */
        background: #767676;
        border-radius: 4px;
        position: absolute;
        bottom: 34px;
    }
`

type Params = {
    id : string
}

const TagEdit = ()=>{
    const {findTag,tagEdit} = useTags();
    let { id } = useParams<Params>(); 
    const tag  = findTag(parseInt(id))
    return (
        <Layout>
            <ButtonStyle>
            <header>
            <TopBar>
                <Icon name='left'></Icon>
                <span>编辑标签</span>
                <Icon></Icon>
            </TopBar>
            </header>
            <InputStyle>

           <Input label='标签名' type="text" 
                value={tag.name}
                onChange={(e)=>{tagEdit(tag.id,{name:e.target.value})}}>
            </Input>
            
            </InputStyle>
            
                <Button>删除标签</Button>
            </ButtonStyle>
        </Layout>
    )
    
}
export default TagEdit;