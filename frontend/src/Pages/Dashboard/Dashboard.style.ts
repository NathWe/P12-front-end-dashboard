import styled from "styled-components";

const PageProfil = styled.div`
  width: 86%;
  margin-top: -830px;
  margin-left: 200px;

  @media screen and (max-width: 1300px) {
    margin-left: 160px;
    margin-top: -858px;
    width: 66%;
  }

  @media screen and (max-width: 780px) {
    margin-left: 125px;
    margin-top: -858px;
    width: 70%;
  }
`;

const Bonjour = styled.div`
  h1 {
    font-size: 48px;
    margin-bottom: 12px;
    margin-top: 0px;

    span {
      color: #ff0000; /* Afficher le prénom en rouge */
    }

    @media screen and (max-width: 1300px) {
      font-size: 40px;
      margin-top: 20px;
    }

    @media screen and (max-width: 780px) {
      font-size: 20px;
      margin-top: 10px;
    }
    span {
      color: #ff0000;
    }
  }

  p {
    font-size: 18px;

    @media screen and (max-width: 1300px) {
      font-size: 16px;
    }

    @media screen and (max-width: 780px) {
      font-size: 12px;
    }
  }

  span {
    color: #ff0000;
  }
`;

const Graphiques = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1300px) {
    flex-direction: column-reverse;
  }
`;

const HorizonGauche = styled.section`
  width: 70%;

  @media screen and (max-width: 1300px) {
    width: 100%;
  }
`;

const Activity = styled.div`
  width: 100%;
  height: 320px;
  border-radius: 5px;
  margin-top: 40px;
  background-color: #fbfbfb;
`;

const Carre = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  width: 100%;
`;

const Sessions = styled.div`
  width: 258px;
  height: 263px;
  border-radius: 5px;
  background-color: #fbfbfb;

  @media screen and (max-width: 1300px) {
    width: 31%;
    height: 170px;
  }
`;

const Performance = styled.div`
  width: 258px;
  height: 263px;
  border-radius: 5px;
  background-color: #fbfbfb;

  @media screen and (max-width: 1300px) {
    width: 31%;
    height: 170px;
  }
`;

const Score = styled.div`
  width: 258px;
  height: 263px;
  border-radius: 5px;
  background-color: #fbfbfb;

  @media screen and (max-width: 1300px) {
    width: 31%;
    height: 170px;
  }
`;

const IconDroite = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 40px;
  margin-left: 40px;
  width: 30%;
  height: 630px;

  @media screen and (max-width: 1300px) {
    margin-left: 0;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 40px;
  background-color: var(--gris);
  width: 100%;
  height: 135px;
  border-radius: 5px;

  img {
    width: 80px;
    height: 80px;
    margin-left: 50px;

    @media screen and (max-width: 1300px) {
      width: 50px;
      height: 50px;
      margin: 0 auto;
      margin-top: 13px;
    }
  }

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    height: auto;
  }
`;

const Infos = styled.div`
  margin-left: 24px;

  @media screen and (max-width: 1300px) {
    margin: auto;
    text-align: center;
    font-size: 12px;
  }
`;

export {
  PageProfil,
  Bonjour,
  Graphiques,
  HorizonGauche,
  Activity,
  Carre,
  Sessions,
  Performance,
  Score,
  IconDroite,
  InfoContainer,
  Infos,
};
