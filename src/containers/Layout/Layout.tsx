import React from "react";
import { useStyles } from "./Layout.styles";

const Layout = ({ children }: any) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default Layout;
