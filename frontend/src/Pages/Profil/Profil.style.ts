import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ProfileLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin: 10px;

  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
  }

  span {
    font-size: 16px;
    color: black;
  }
`;
