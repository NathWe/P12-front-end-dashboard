import React from "react";
import {
  HorizonContainer,
  HeaderContainer,
  LogoImage,
  NavContainer,
  NavList,
  NavLinkItem,
} from "./NavHorizontal.style";
import logo from "../../../assets/logo/logo.png";

/**
 * @function NavHorizontal
 * @description Navigation bar component.
 * @returns {JSX.Element} The navigation bar.
 */

const NavHorizontal: React.FC = () => {
  return (
    <HorizonContainer>
      <HeaderContainer>
        <LogoImage src={logo} alt="logo SportSee" />
        <NavContainer>
          <NavList>
            <NavLinkItem to="/home" className="navLink">
              <li>Accueil</li>
            </NavLinkItem>
            <NavLinkItem to="/profil" className="navLink">
              <li>Profil</li>
            </NavLinkItem>
            <NavLinkItem to="/reglage" className="navLink">
              <li>Réglage</li>
            </NavLinkItem>
            <NavLinkItem to="/communaute" className="navLink">
              <li>Communauté</li>
            </NavLinkItem>
          </NavList>
        </NavContainer>
      </HeaderContainer>
    </HorizonContainer>
  );
};

export default NavHorizontal;
