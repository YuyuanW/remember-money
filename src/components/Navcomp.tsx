import styled from "styled-components";
import { Link } from "react-router-dom";

import chart from 'icons/chart.svg';
import money from 'icons/money.svg';
import tags from 'icons/tags.svg';
console.log(chart,money,tags)

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
    padding: 8px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
 }
`
const Nav = ()=>{
    return (
        <NavCom>
          <ul>
            <li>
              <svg>
                <use xlinkHref="#tags"/> 
              </svg>
              <Link to="/tags"><strong>标签</strong></Link>
            </li>
            <li>
              <svg> 
                <use xlinkHref="#money"/>
              </svg>
              <Link to="/change"><strong>记账</strong></Link>
            </li>
            <li>
              <svg>
                <use xlinkHref="#chart"/>
              </svg>
              <Link to="/money"><strong>统计</strong></Link>
            </li>
          </ul>
        </NavCom>
    )
}

export default Nav;



