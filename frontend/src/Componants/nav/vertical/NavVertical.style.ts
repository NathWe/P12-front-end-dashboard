import styled, { css } from "styled-components";

interface StyledButtonProps {
  hover?: boolean;
}

export const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 857px;
  width: 117px;
  background-color: var(--noir);

  @media screen and (min-width: 412px) and (max-width: 780px) {
    width: 90px;
  }
`;

export const NavIcone = styled.section`
  display: flex;
  width: 64px;
  height: 316px;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 200px;
  margin-bottom: 164px;
`;

export const StyledButton = styled.button<StyledButtonProps>`
  border-radius: 6px;
  background-color: black;

  ${(props) =>
    props.hover &&
    css`
      background-color: red;
      box-shadow: 0px 0px 6px 3px red;
      border: none;
    `}
`;
