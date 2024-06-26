import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 68px 90px 0 200px;

  h1,
  span {
    font-size: 50px;
    font-weight: 700;
    color: #ff0000;
    margin-bottom: 77px;
    text-align: center;
  }

  .error-link {
    font-weight: 500;
    font-size: 18px;
    text-decoration-line: underline;
    color: #ff0000;
    margin-top: 10rem;
    text-align: center;
  }
`;
