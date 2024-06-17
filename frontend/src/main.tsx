import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createGlobalStyle } from "styled-components";
import { globalStyles } from "./main.style";

/**
 * @constant {import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>} GlobalStyle
 * @description Global styles component.
 */
const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

export default GlobalStyle;
