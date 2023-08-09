import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import Footer from "../Footer/Footer";
const Layout = ({ children }) => {
  const [ham, setHam] = useState(false);
  return (
    <>
      <Navbar ham={ham} setHam={setHam} />
      <main>
        {ham ? (
          <div className="ham-menu">
            <li>Discord</li>
            <li>Twitter</li>
            <button>Launch App</button>
          </div>
        ) : (
          ""
        )}
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
