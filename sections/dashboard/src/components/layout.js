import React from "react";
import { Link } from "gatsby";
import { IdentityContextProvider } from "react-netlify-identity-widget";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <IdentityContextProvider url="https://hungry-meitner-6fb34a.netlify.app">
      <header>
        <Link to="/">JAMStack App</Link>
      </header>
      <main>{children}</main>
    </IdentityContextProvider>
  );
};

export default Layout;
