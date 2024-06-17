import React from "react";
import { Link } from "react-router-dom";
import { ErrorContainer } from "./Error.style";

/**
 * @function Error
 * @description Error page component.
 * @returns {JSX.Element} The error page.
 */
const Error: React.FC = () => {
  return (
    <ErrorContainer>
      <h1>404</h1>
      <span>Oups! La page que vous demandez n'existe pas.</span>
      <Link to="/home" className="error-link">
        Retour à la page d'Accueil
      </Link>
    </ErrorContainer>
  );
};

export default Error;
