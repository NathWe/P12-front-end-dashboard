import styled from "styled-components";

const PageProfil = styled.div`
  width: 86%;
  margin-top: -830px;
  margin-left: 200px;
`;

const Bonjour = styled.div`
  h1 {
    font-size: 48px;
    margin-bottom: 12px;
    margin-top: 0px;
  }
  p {
    font-size: 18px;
  }
  span {
    color: #ff0000;
  }
`;

const Graphiques = styled.div`
  display: flex;
`;

const HorizonGauche = styled.section`
  width: 70%;
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
`;

const Performance = styled.div`
  width: 258px;
  height: 263px;
  border-radius: 5px;
  background-color: #fbfbfb;
`;

const Score = styled.div`
  width: 258px;
  height: 263px;
  border-radius: 5px;
  background-color: #fbfbfb;
`;

const IconDroite = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 40px;
  margin-left: 40px;
  width: 30%;
  height: 630px;
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
  }
`;

const Infos = styled.div`
  margin-left: 24px;
`;

const MediaQueries = styled.div`
  @media screen and (min-width: 780px) and (max-width: 1300px) {
    ${Bonjour} h1 {
      font-size: 40px;
      margin-top: 20px;
    }
    ${Bonjour} p {
      font-size: 16px;
    }
    ${PageProfil} {
      margin-left: 160px;
      margin-top: -858px;
      width: 66%;
    }
    ${Sessions}, ${Performance}, ${Score} {
      width: 31%;
      height: 170px;
    }
    ${IconDroite} {
      width: 100%;
      flex-direction: row;
      justify-content: unset;
      margin-left: 0;
    }
    ${Graphiques} {
      flex-direction: column;
    }
    ${InfoContainer} {
      flex-direction: column;
      height: 111px;
    }
    ${InfoContainer} img {
      width: 50px;
      height: 50px;
      margin-right: 50px;
      margin-left: 50px;
      margin-top: 13px;
    }
    ${Infos} {
      margin: auto;
      font-size: 12px;
    }
    ${HorizonGauche} {
      width: 100%;
    }
  }

  @media screen and (min-width: 412px) and (max-width: 780px) {
    ${Bonjour} h1 {
      font-size: 20px;
      margin-top: 10px;
    }
    ${Bonjour} p {
      font-size: 12px;
    }
    ${PageProfil} {
      margin-left: 125px;
      margin-top: -858px;
      width: 70%;
    }
    ${Sessions}, ${Performance}, ${Score} {
      width: 31%;
      height: 170px;
    }
    ${IconDroite} {
      width: 25%;
      flex-direction: row;
      justify-content: unset;
      margin-left: 0;
    }
    ${Graphiques} {
      flex-direction: column;
      font-size: 10px;
    }
    ${InfoContainer} {
      flex-direction: column;
      height: 111px;
    }
    ${InfoContainer} img {
      width: 50px;
      height: 50px;
      margin-right: 50px;
      margin-left: 50px;
      margin-top: 13px;
    }
    ${Infos} {
      margin: auto;
      font-size: 10px;
    }
    ${HorizonGauche} {
      width: 100%;
    }
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
  MediaQueries,
};
