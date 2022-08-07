
import Layout from "components/Layout";
import React from "react";
import styled from "styled-components";
import CategorySection from "./Change/CategorySection";
import useHistory, { HisItems } from "./Change/useHistory";
import useTags from "./Tags/useTags";
import day from 'dayjs';

const PageStyle = styled.section`
  background: #F5F5F5;
  height:100%;
`

const CateStyle = styled.div`
  > section {
    background: #FFFFFF;
  }
`
const Header = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding:10px 16px;

  background: #F5F5F5;
  font-family: 'Source Han Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: #000000;
`

const ChangeStyle = styled.div`
  background: white;
  > div{
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

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      > span{
        padding-right: 4px;
      }
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

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
  }
  
  
`

function Money() {
  const [state,setState] = React.useState<'-' | '+'>('-')
  const {his} = useHistory()
  const {getName} = useTags()
  const selectedCate = his.filter(h=>h.cate === state)
  const hash:{[key:string]:HisItems[]} = {}
  selectedCate.map(i=>{
    const key = day(i.createdTime).format('YYYY-MM-DD')
    if(!(key in hash)){
      hash[key] = []
    }
    hash[key].push(i)
  })
  const arr = Object.entries(hash).sort((a,b)=>{
    if(a[0]===b[0]) return 0;
    if(a[0]>b[0]) return -1;
    if(a[0]<b[0]) return 1;
    return 0
  })

  let addAmount = (a:HisItems[])=>{
    let amount = 0
    a.map(ar=>amount+=ar.amount)
    return amount
  }
  
  return (
    <Layout>
      <PageStyle>
        <CateStyle>
          <CategorySection cate={state} onChange={(cate)=>setState(cate)}/>
        </CateStyle>
      
      <ChangeStyle>
        {arr.map(a=><div key={a[0]}>
          <Header><div>{a[0]}</div> <div>￥{addAmount(a[1])}</div></Header>
          {a[1].map(t=>{
          return <div key={t.createdTime} className='tags'>
          <div className='name'>{t.tagsId.map(item=><span key={item} >{getName(item)}</span>)}</div>
          
          {t.notes && <div className="note">
            {t.notes}
          </div>}
          <div className="amount">
            ￥{t.amount}
          </div>
          
          {/* <hr/>
          {t.createdTime.split('T')[0]} */}
        </div>})}
        </div>)}
        
      </ChangeStyle>
      </PageStyle>
    </Layout>
  )
}

export default Money;