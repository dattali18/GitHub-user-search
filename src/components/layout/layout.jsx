// Dependencies
import { Outlet } from "react-router";

// Components
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
    </>
  );
};

export default Layout;
