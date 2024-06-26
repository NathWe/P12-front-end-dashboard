import { ProfileLink, ProfilContainer, Title } from "./Profil.style";
import karl from "../../assets/images/karl.png";
import cecilia from "../../assets/images/cecilia.png";

/**
 * @function Profil
 * @description Profile page component.
 * @returns {JSX.Element} The profile page.
 */
const Profil = (): JSX.Element => {
  return (
    <ProfilContainer>
      <Title>Cliquez sur le profil de votre choix</Title>
      <ProfileLink
        to="/user/12"
        onClick={() => console.log("Navigating to user 12")}
      >
        <img src={karl} alt="Karl's profile" />
        <span>Profil de Karl</span>
      </ProfileLink>
      <ProfileLink
        to="/user/18"
        onClick={() => console.log("Navigating to user 18")}
      >
        <img src={cecilia} alt="Cecilia's profile" />
        <span>Profil de Cécilia</span>
      </ProfileLink>
    </ProfilContainer>
  );
};

export default Profil;
