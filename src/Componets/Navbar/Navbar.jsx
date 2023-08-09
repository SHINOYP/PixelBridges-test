import "./navbarStyle.scss";
import Logo from "../../assets/svgs/Logo.svg";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ ham, setHam }) => {
  return (
    <nav>
      <div>
        <img src={Logo} />
        <span>Discord</span>
        <span>Twitter</span>
      </div>
      <div className="btn-hamburger">
        {ham ? (
          <AiOutlineClose onClick={() => setHam(!ham)} />
        ) : (
          <RxHamburgerMenu onClick={() => setHam(!ham)} />
        )}
      </div>
      <button className="btn-LaunchApp">Launch App</button>
    </nav>
  );
};

export default Navbar;
