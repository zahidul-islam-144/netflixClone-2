import React, { useContext, Children } from "react";
import TopHeader from "./TopHeader";
import Footer from "./Footer";

type childrenType = {
  children: any;
}


const Layout = ({children}:childrenType) => {

  return (
    <>
      <TopHeader />
      <main>{children}</main>
      {/* <Footer/> */}
    </>
  );
};

export default Layout;

