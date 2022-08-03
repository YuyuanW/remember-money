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
          <CategorySection />
          <NumberSection/>
          
        </Div>
      </Layout>
    );
}

export default Change;