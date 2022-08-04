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
      tagsId:[] as number[],
      notes:'',
      cate : '-' as Cate,
      amount : 0
    }
  )
  const change = (value:Partial<typeof state>)=>{
    setState({...state,...value})
  }
    return  (
      <Layout>
        <Div>
          <TagsSection selected={state.tagsId} onChange={(tagsId)=>change({tagsId})} />
          <NoteSection notes = {state.notes} onChange={(notes)=>change({notes})}/>
          <CategorySection cate={state.cate} onChange={(cate)=>change({cate})}/>
          <NumberSection amount={state.amount} onChange={(amount)=>change({amount})}/>
          
        </Div>
      </Layout>
    );
}

export default Change;