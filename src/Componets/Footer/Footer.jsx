import "./footerStyle.scss";
import TwitterIcon from "../../assets/svgs/Footer/Twitter.svg";
import GithubIcon from "../../assets/svgs/Footer/Github.svg";
import DiscordIcon from "../../assets/svgs/Footer/Discord.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={TwitterIcon} alt="Twitter" />
        <img src={GithubIcon} alt="Github" />
        <img src={DiscordIcon} alt="Discord" />
      </div>
      <div>
        <span>Documentation</span>
        <span>Tutorials</span>
        <span>Risks</span>
      </div>
    </footer>
  );
};

export default Footer;
