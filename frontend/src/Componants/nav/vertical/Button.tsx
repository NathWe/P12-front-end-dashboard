import React from "react";

/**
 * @function Button
 * @param {object} props - Props for the Button component.
 * @param {string} props.srcImg - Image source for the button.
 * @param {() => void} props.launch - Function to be called when the button is clicked.
 * @return {JSX.Element} - JSX representation of a button element with an image.
 */
const Button: React.FC<{
  srcImg: string;
  launch: () => void;
}> = ({ srcImg, launch }) => {
  return (
    <li
      className="vn-container__bloc-nav__bloc-ul__list"
      style={{ listStyle: "none" }}
    >
      <button
        className="vn-container__bloc-nav__bloc-ul__list__button"
        onClick={launch}
      >
        <img
          src={srcImg}
          alt="icon"
          loading="lazy"
          className="vn-container__bloc-nav__bloc-ul__list__button__img"
        />
      </button>
    </li>
  );
};

export default Button;
