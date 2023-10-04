import React, { useContext, Children } from "react";
import TopHeader from "./TopHeader";
import Footer from "./Footer";
import Login from "../pages/login";

type childrenType = {
  children: any;
};

const Layout = ({ children }: childrenType) => {
  // return false ? (
  //   <>
  //     <TopHeader />
  //     <main>{children}</main>
  //     {/* <Footer/> */}
  //   </>
  // ) : (
  //   <Login />
  // );
  return (
    <>
     { true && <TopHeader />}
      <main>{children}</main>
      {/* <Footer/> */}
    </>
  );
};

export default Layout;
