import React from "react";
import styled from "styled-components";

/**
 * @function Button
 * @param {object} props - Props for the Button component.
 * @param {string} props.srcImg - Image source for the button.
 * @param {() => void} props.launch - Function to be called when the button is clicked.
 * @return {JSX.Element} - JSX representation of a button element with an image.
 */
const ListItem = styled.li`
  list-style: none;
`;

const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  &:hover img {
    transform: scale(1.1);
  }

  img {
    width: 64px;
    height: 64px;
    transition: transform 0.2s;
  }
`;

const Button: React.FC<{
  srcImg: string;
  launch: () => void;
}> = ({ srcImg, launch }) => {
  return (
    <ListItem>
      <StyledButton onClick={launch}>
        <img src={srcImg} alt="icon" loading="lazy" />
      </StyledButton>
    </ListItem>
  );
};

export default Button;
