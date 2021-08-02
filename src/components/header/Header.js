import React from "react";
import Navigation from "../navigation/Navigation";
import { mainRoutes } from "../../routes/mainRoutes";
import { HeaderStyled } from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <Navigation routes={mainRoutes} />
    </HeaderStyled>
  );
};

export default Header;
