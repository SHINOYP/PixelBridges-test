import "./footerStyle.scss";
import TwitterIcon from "../../assets/svgs/Footer/Twitter.svg";
import GithubIcon from "../../assets/svgs/Footer/Github.svg";
import DiscordIcon from "../../assets/svgs/Footer/Discord.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Footer = () => {
  return (
    <footer>
      <div>
        <LazyLoadImage src={TwitterIcon} alt="Twitter" />
        <LazyLoadImage src={GithubIcon} alt="Github" />
        <LazyLoadImage src={DiscordIcon} alt="Discord" />
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
