import Button from "./Button";
import yoga from "../../../assets/images/yoga.png";
import natation from "../../../assets/images/natation.png";
import velo from "../../../assets/images/velo.png";
import altere from "../../../assets/images/alteres.png";
import copy from "../../../assets/images/copiryght.png";
import { Vertical, NavIcone } from "./NavVertical.style";

/**
 * @function NavVertical
 * @description Vertical navigation bar component with activity buttons.
 * @returns {JSX.Element} The vertical navigation bar.
 */
function NavVertical(): JSX.Element {
  const handleGetMeditationData = (): void => {
    console.log("yoga");
  };

  const handleGetNatationData = (): void => {
    console.log("natation");
  };

  const handleGetCyclismeData = (): void => {
    console.log("velo");
  };

  const handleGetMusculationData = (): void => {
    console.log("altere");
  };

  return (
    <Vertical>
      <NavIcone>
        <Button srcImg={yoga} launch={handleGetMeditationData} />
        <Button srcImg={natation} launch={handleGetNatationData} />
        <Button srcImg={velo} launch={handleGetCyclismeData} />
        <Button srcImg={altere} launch={handleGetMusculationData} />
      </NavIcone>
      <img className="copy" src={copy} alt="copiryght SportSee" />
    </Vertical>
  );
}

export default NavVertical;
