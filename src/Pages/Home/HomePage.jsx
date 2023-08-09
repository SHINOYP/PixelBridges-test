import "./HomeStyles.scss";
import Layout from "../../Componets/Layout/Layout";
import AribtrumIcon from "../../assets/svgs/section1/Arbitrum.svg";
import Homescrt from "../../assets/Images/Homescrt.svg";

const Home = () => {
  return (
    <Layout>
      <section className="section1">
        <h1>Capital Efficient Options Trading</h1>
        <p>
          One click multi leg options trades, capital efficient spreads,
          automatically hedged vaults, and more.
        </p>
        <div className="home-brands">
        <h4>AVAILABLE ON</h4>
        <img src={AribtrumIcon} alt="AribtrumIcon " />
        </div>
        <div className="home-brands">
          <h4>AVAILABLE ON</h4>
          <img src={AribtrumIcon} alt="AribtrumIcon " />
        </div>
      </section>
      <img
        src={Homescrt}
        alt="Screenshot of a window"
        className="home-screenshot"
      />
      <section className="section2">
        <h4>Community Driven</h4>
        <h2>Tools for everyone</h2>
        <div>
        <div className="home-comment">
            <h4>Ranged Markets</h4>
            <p>
              Earn fees from option spread traders, no withdrawal fees, capital
              is automatically hedged.
            </p>
          </div>
          <div className="home-comment">
            <h4>Ranged Markets</h4>
            <p>
              Earn fees from option spread traders, no withdrawal fees, capital
              is automatically hedged.
            </p>
          </div>
          <div className="home-comment">
            <h4>Ranged Markets</h4>
            <p>
              Earn fees from option spread traders, no withdrawal fees, capital
              is automatically hedged.
            </p>
          </div>
          <div className="home-comment">
            <h4>Ranged Markets</h4>
            <p>
              Earn fees from option spread traders, no withdrawal fees, capital
              is automatically hedged.
            </p>
          </div>
          <div className="home-comment">
            <h4>Ranged Markets</h4>
            <p>
              Earn fees from option spread traders, no withdrawal fees, capital
              is automatically hedged.
            </p>
          </div>
          <div className="home-comment">
            <h4>Ranged Markets</h4>
            <p>
              Earn fees from option spread traders, no withdrawal fees, capital
              is automatically hedged.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
