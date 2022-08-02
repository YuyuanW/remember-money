import styled from "styled-components";
import { Link } from "react-router-dom";


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
    padding: 16px;
    font-size: 16px;
  }
 }
`
const Nav = ()=>{
    return (
        <NavCom>
          <ul>
            <li>
              <Link to="/tags"><strong>标签</strong></Link>
            </li>
            <li>
              <Link to="/change"><strong>记账</strong></Link>
            </li>
            <li>
              <Link to="/money"><strong>统计</strong></Link>
            </li>
          </ul>
        </NavCom>
    )
}

export default Nav;



