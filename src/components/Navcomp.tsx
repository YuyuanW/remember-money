import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Icon from './Icon';

console.log(Icon)

// import chart from 'icons/chart.svg';
// import money from 'icons/money.svg';
// import tags from 'icons/tags.svg';
// console.log(chart,money,tags);



const NavCom = styled.nav`
  line-height: 24px;
  box-shadow:0 0 3px rgba(0,0,0,0.25);
 > ul {
  display: flex;
  /* flex-grow:1; */
  > li {
    /* width: 33.33%; */
    flex-grow:1;
    text-align: center;
    padding: 4px;
    font-size: 16px;
   
    > a{
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
    }

    .selected{
      color : red;
      > svg {
        fill : red;
      }
    }
  }
  svg{
    width:24px;
    height:24px
  }
 }
`
const Nav = ()=>{
  return (
    <NavCom>
      <ul>
        <li>
          <NavLink exact to="/tags" activeClassName="selected"><Icon name={'tags'}></Icon><strong>标签</strong></NavLink>
        </li>
        <li>
            <NavLink to="/change" activeClassName="selected"><Icon name={'money'}></Icon><strong>记账</strong></NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected"><Icon name={'chart'}></Icon><strong>统计</strong></NavLink>
        </li>
      </ul>
    </NavCom>
  )
}

export default Nav;



