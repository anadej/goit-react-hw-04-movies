import React from "react";
import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = ({ routes }) => {
  return (
    <NavigationStyled>
      <ul className="navList">
        {routes.map((route) => (
          <li className="navItem" key={route.path}>
            <NavLink
              className="navLink"
              activeClassName="activeNavLink"
              to={route.path}
              exact={route.exact}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
