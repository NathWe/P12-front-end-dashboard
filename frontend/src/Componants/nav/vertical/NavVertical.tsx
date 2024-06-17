import Button from "./Button";
import yoga from "../../../assets/images/yoga.png";
import natation from "../../../assets/images/natation.png";
import velo from "../../../assets/images/velo.png";
import altere from "../../../assets/images/alteres.png";
import copy from "../../../assets/images/copiryght.png";
import { Vertical, NavIcone, StyledButton } from "./NavVertical.style";

/**
 * @function NavVertical
 * @description Vertical navigation bar component with activity buttons.
 * @returns {JSX.Element} The vertical navigation bar.
 */
function NavVertical(): JSX.Element {
  const handleGetMeditationData = (): void => {
    console.log("yoga");
  };

  function handleGetNatationData(): void {
    console.log("natation");
  }

  function handleGetCyclismeData(): void {
    console.log("velo");
  }

  function handleGetMusculationData(): void {
    console.log("altere");
  }

  return (
    <Vertical>
      <NavIcone>
        <StyledButton
          as={Button}
          srcImg={yoga}
          launch={handleGetMeditationData}
          hover
        />
        <StyledButton
          as={Button}
          srcImg={natation}
          launch={handleGetNatationData}
          hover
        />
        <StyledButton
          as={Button}
          srcImg={velo}
          launch={handleGetCyclismeData}
          hover
        />
        <StyledButton
          as={Button}
          srcImg={altere}
          launch={handleGetMusculationData}
          hover
        />
      </NavIcone>
      <img className="copy" src={copy} alt="copiryght SportSee" />
    </Vertical>
  );
}

export default NavVertical;
