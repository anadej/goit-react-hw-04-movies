import styled from "styled-components";

const NavigationStyled = styled.nav`
  .navList {
    display: flex;
    list-style: none;
  }
  .navItem:not(:last-child) {
    margin-right: 20px;
  }

  .navLink {
    font-size: 26px;
    text-decoration: none;
    text-transform: uppercase;
    color: cornflowerblue;
  }
  .activeNavLink {
    color: #5f73a1;
  }
`;

export default NavigationStyled;
