import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HorizonContainer = styled.div`
  height: 80px;
  width: 100%;
  background-color: var(--noir);

  @media screen and (min-width: 780px) and (max-width: 1300px) {
    width: 100%;
  }

  @media screen and (min-width: 412px) and (max-width: 780px) {
    height: 60px;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 178px;
  height: 60.93px;
  margin-left: 20px;

  @media screen and (min-width: 780px) and (max-width: 1300px) {
    width: 120px;
    height: 30.93px;
    margin-left: 20px;
  }

  @media screen and (min-width: 412px) and (max-width: 780px) {
    width: 150px;
    height: 35.93px;
    margin-left: 13px;
  }
`;

export const NavContainer = styled.nav`
  font-weight: 500;
  font-size: 24px;
  width: 80%;

  @media screen and (min-width: 780px) and (max-width: 1300px) {
    font-size: 18px;
  }

  @media screen and (min-width: 412px) and (max-width: 780px) {
    font-size: 10px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const NavLinkItem = styled(NavLink)`
  text-decoration: none;
  color: white;
  list-style: none;

  &.active {
    color: red;
  }
`;
