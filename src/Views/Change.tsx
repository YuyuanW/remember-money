import Layout from "components/Layout";
import styled from "styled-components";

const TagsSection = styled.section`
/* border:1px solid red; */
  height: 30vh;
  background: #FFFFFF;
  > ol{
    display: flex;
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
      padding : 1px 18px;
      margin: 16px 12px;
      background-color:  #D9D9D9;;

      /* 变形 */
      border-radius: 18px;
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
  }
`
const NoteSection = styled.section`
  background: #F5F5F5;
  >label {
    display: flex;
    flex-direction: row;
    padding: 22px 16px;
    > span{
    font-family: 'Source Han Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #333333;
    padding-right:16px ;
    /* 设置不换行 */
    white-space: nowrap;  
    }
    >input{
      flex-grow:1;
      border: none;
      color: #999999;
      background-color: #F5F5F5;
      width:100%;
    }
  }
`

const CategorySection = styled.section`
  background-color: rgb(196,196,196);
  > ul {
    display: flex;
    flex-direction: row;
     > li{
      text-align: center;
      justify-content: center;
      align-items: center;
      width: 50%;
      
      font-family: 'Source Han Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 22px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: -0.41px;
      color: #000000;

      line-height: 22px;
      padding:20px 0;

      position: relative;

      &.selected::after{
        content:'';
        width:100%;
        border: 1.5px solid #333;

        position: absolute;
        bottom:0px;
        left: 0;

      }
     }
  }

`

const NumberSection = styled.section``
function Change() {
    return  (
      <Layout>
        <TagsSection>
          <ol>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
          </ol>
          <button>新增标签</button>
        </TagsSection>
        <NoteSection>
          <label>
            <span>备注</span>
            <input type="text" placeholder='在这里新增备注'/>
          </label>
        </NoteSection>
        <CategorySection>
          <ul>
            <li >支出</li>
            <li className="selected">收入</li>
          </ul>
        </CategorySection>

        <NumberSection>
          <div>100</div>
          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
            <button>删除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
            <button>清空</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>×</button>
            <button>OK</button>
            <button>0</button>
            <button>.</button>
            <button>%</button>
            <button>÷</button>
            <button>OK</button>
          </div>
        </NumberSection>
      </Layout>
    );
}

export default Change;