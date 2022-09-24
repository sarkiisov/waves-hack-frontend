import React from "react";
import { useStyles } from "./Layout.styles";
import { Box, Button, Typography } from "@material-ui/core";
import { NavLink, useLocation } from "react-router-dom";

const Layout = ({ children }: any) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <Box className={classes.container}>
      <Box className={classes.wrapper}>
        <header className={classes.header}>
          <Typography className={classes.logo}>The Moon</Typography>
          <Box className={classes.btnWrapper}>
            <NavLink
              to="/pool"
              className={() =>
                location.pathname === "/pool"
                  ? `${classes.link} ${classes.linkActive}`
                  : classes.link
              }
            >
              Пулы
            </NavLink>
            <NavLink
              to="/"
              className={() =>
                location.pathname === "/"
                  ? `${classes.link} ${classes.linkActive}`
                  : classes.link
              }
            >
              Обменять
            </NavLink>
          </Box>
        </header>
        <main className={classes.content}>{children}</main>
      </Box>
    </Box>
  );
};

export default Layout;
