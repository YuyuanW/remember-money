import Layout from "components/Layout";
import useTags from "./Tags/useTags";
import styled from "styled-components";
import Icon from "components/Icon";
import { Link } from "react-router-dom";
import Button from "lib/Button";

const OlDiv = styled.div`
  position: relative;
  /* overflow: hidden; */
  
  > ol{
    max-height: 80vh;
    overflow-y: scroll;
    /* border:1px solid red; */
    > li {
      border-bottom: 2px solid #DDDDE0;
      
      margin-left:16px ;
      position: relative;
      >a{
        
        display: block;
        padding : 12px 14px 16px 0px;
        > span{
          font-family: 'Source Han Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px; 

        
          height: 24px;
          width: 24px;
        }
        > svg{
          height: 24px;
          width: 24px;
          position: absolute;
          right:12px;
        }
      }
     
      
      &.oneLine{
        white-space: nowrap;  //不换行
        overflow: hidden; // 超过的文字就隐藏
        text-overflow:ellipsis; //隐藏的用省略号表示
      }
      
    }
  }
`


function Tags() {
  const {tags,newTag} = useTags() 
  return (
    <Layout>
      <OlDiv>
        <ol>
          {tags.map(tag=><li key={tag.id} className='oneLine'>
            <Link to={'/tags/'+tag.id}><span>{tag.name}</span><Icon name="right" /></Link>
            </li>)}
        </ol>
        <Button onClick={newTag}><span>新建标签</span></Button>
        </OlDiv>
    </Layout>
  );
}
export default Tags;