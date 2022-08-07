
import Layout from "components/Layout";
import React from "react";
import styled from "styled-components";
import CategorySection from "./Change/CategorySection";
import useHistory from "./Change/useHistory";
import useTags from "./Tags/useTags";

const PageStyle = styled.section`
  background: #F5F5F5;
  height:100%;
`

const CateStyle = styled.div`
  > section {
    background: #FFFFFF;
  }
`

const ChangeStyle = styled.div`
  background: white;
  > div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    padding: 10px 16px;
    >.name{
      font-family: 'Source Han Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: -0.41px;
      color: #000000;

      padding-right: 13px;
    }
    >.note{
      margin-right: auto;  //加上这一句居然就自动靠左了，flex布局啊啊啊啊
      margin-left: -3px;

      font-family: 'Source Han Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: -0.41px;
      color: #999999;
    }
    > .amount{
      font-family: 'Source Han Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      text-align: right;
      letter-spacing: -0.41px;
      color: #000000;
    }
  }
  
`

function Money() {
  const [state,setState] = React.useState<'-' | '+'>('-')
  const {his} = useHistory()
  const {getName} = useTags()
  return (
    <Layout>
      <PageStyle>
        <CateStyle>
          <CategorySection cate={state} onChange={(cate)=>setState(cate)}/>
        </CateStyle>
      
      <ChangeStyle>
        {his.map(t=>{
          return <div key={t.createdTime} className='tags'>
          {t.tagsId.map(item=><span key={item} className='name'>{getName(item)}</span>)}
          {t.notes && <div className="note">
            {t.notes}
          </div>}
          <div className="amount">
            ￥{t.amount}
          </div>
          
          {/* <hr/>
          {t.createdTime.split('T')[0]} */}
        </div>})}
      </ChangeStyle>
      </PageStyle>
    </Layout>
  )
}

export default Money;