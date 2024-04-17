// Dependencies
import { Outlet } from "react-router";

// Components
import Header from "../header/header.jsx";

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
};

export default Layout;
