import React from "react";
import SideNav from "./SideNav";
import Content from "./Content";

const Layout = ({ children }) => {
  return (
    <div className="flex w-screen h-screen">
      <SideNav />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
