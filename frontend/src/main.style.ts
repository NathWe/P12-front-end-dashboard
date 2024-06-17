import { css } from "styled-components";

/**
 * @constant {import("styled-components").FlattenSimpleInterpolation} globalStyles
 * @description Global styles for the application.
 */
export const globalStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  :root {
    --rouge: #ff0101;
    --blanc: #ffffff;
    --gris: #fbfbfb;
    --noir: #000000;
  }
`;
