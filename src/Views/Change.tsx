import Layout from "components/Layout";
import styled from "styled-components";
import CategorySection from "./Change/CategorySection";
import NoteSection from "./Change/NoteSection";
import NumberSection from "./Change/NumberSection";
import TagsSection from "./Change/TagsSection";
import React from "react";
import { type } from "os";

const Div =styled.div`
  height: 100%;
  /* border:5px solid yellow; */
  display: flex;
  flex-direction: column;
`
type Cate = '-' | '+'
function Change() {
  const [state,setState] = React.useState(
    {
      tags:[] as string[],
      notes:'',
      cate : '-' as Cate,
      amount : 0
    }
  )
    return  (
      <Layout>
        <Div>
          <TagsSection selected={state.tags} onChange={(tags)=>setState({...state,tags})} />
          <NoteSection notes = {state.notes} onChange={(notes)=>setState({...state,notes})}/>
          <CategorySection cate={state.cate} onChange={(cate)=>setState({...state,cate})}/>
          <NumberSection amount={state.amount} onChange={(amount)=>setState({...state,amount})}/>
          
        </Div>
      </Layout>
    );
}

export default Change;