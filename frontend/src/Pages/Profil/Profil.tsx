import { Link } from "react-router-dom";
import karl from "../../assets/images/karl.png";
import cecilia from "../../assets/images/cecilia.png";

/**
 * Displays user profile images.
 *
 * @returns {JSX.Element} A JSX element representing the user profile images.
 */
const Profil = (): JSX.Element => {
  return (
    <div>
      <Link to="/user/12">
        <img src={karl} alt="Karl's profile" />
      </Link>
      <Link to="/user/18">
        <img src={cecilia} alt="Cecilia's profile" />
      </Link>
    </div>
  );
};

export default Profil;
