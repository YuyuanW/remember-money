import styled from "styled-components";
import React from "react";
import useTags from "Views/Tags/useTags";
import create from "lib/created";
const _TagsSection = styled.section`
  /* border:1px solid red; */
  max-height: 50vh;
  flex-grow:1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background: #FFFFFF;
  > ol{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 16px;
    margin-left: 10px;
    >li {
      
      /* 字体设置 */
      font-family: 'Arial';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #484848;
      

      /* 盒模型构建 */
      line-height: 22px;
      padding :1px 12px;
      margin: 6px 6px 0px 6px;
      background-color:  #D9D9D9;;

      /* 变形 */
      border-radius: 18px;

      &.selected{
        background: #f60;
      }
    }
  }
  > button{
  /* 字体设置 */
  font-family: 'Source Han Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #999999;

  text-align: center;
  border-style:none;
  border-bottom: 1px solid #999999;
  background-color: #FFFFFF;
  padding: 1px 6px;
  margin-left: 12px;
  margin-bottom: 12px;
  }
`

type Props = {selected:number[],onChange:(selected:number[])=>void}
const TagsSection:React.FC<Props> = (props)=>{
    const {tags,setTags} = useTags() 
    const tagsLight = props.selected
    const setLight = props.onChange
    const newTag = ()=>{
        const tag = window.prompt('新标签为：')
        if(tag===''){
            window.confirm('标签不能为空，请重新输入！')
        }else if(tag!==null){
            setTags([...tags,{id:create(),name:tag}])
        }
    }
    const Light = (tagId: number)=>{
        if(tagsLight.indexOf(tagId)>=0){ setLight(tagsLight.filter(t=>t!==tagId))  }
        else{setLight([...tagsLight,tagId])}
    }
    return (
        <_TagsSection>
            <ol>
              {tags.map(
                tag=><li key={tag.id} 
                onClick={()=>{Light(tag.id)}}
                className={tagsLight.indexOf(tag.id)>=0 ? 'selected' : ''}
                >{tag.name}</li>)}
            </ol>
            <button onClick={newTag}>新增标签</button>
        </_TagsSection>
    )
}

export default TagsSection;
