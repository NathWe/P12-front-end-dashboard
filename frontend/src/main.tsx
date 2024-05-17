import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createGlobalStyle } from "styled-components";
import { globalStyles } from "./main.style";

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
