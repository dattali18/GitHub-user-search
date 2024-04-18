// Dependencies
import { Outlet } from "react-router";

// Components
import Footer from "../footer/footer.jsx";
import Header from "../header/header.jsx";

// Styles
import "./layout.css";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
