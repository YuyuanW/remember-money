import Layout from "components/Layout";
import styled from "styled-components";
import CategorySection from "./Change/CategorySection";
import NoteSection from "./Change/NoteSection";
import NumberSection from "./Change/NumberSection";
import TagsSection from "./Change/TagsSection";

const Div =styled.div`
  height: 100%;
  /* border:5px solid yellow; */
  display: flex;
  flex-direction: column;
`

function Change() {
    return  (
      <Layout>
        <Div>
          <TagsSection />
          <NoteSection />

          <CategorySection>
            <ul>
              <li >支出</li>
              <li className="selected">收入</li>
            </ul>
          </CategorySection>

          <NumberSection>
            <div className="output">100</div>
            <div className="pad">
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
              <button className="ok">OK</button>
              <button>0</button>
              <button>.</button>
              <button>%</button>
              <button>÷</button>
              
            </div>
          </NumberSection>
        </Div>
      </Layout>
    );
}

export default Change;