import styled from "styled-components";


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
export default CategorySection;