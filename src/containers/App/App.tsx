import React from "react";
import { ThemeProvider, StylesProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Slide } from "react-toastify";
import { theme } from "../../theme";
import Routes from "../Routes";
import Layout from "../Layout/Layout";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <CssBaseline />
        <ToastContainer
          position="top-right"
          newestOnTop
          autoClose={4000}
          draggable={false}
          transition={Slide}
        />
        <Layout>
          <Routes />
        </Layout>
      </StylesProvider>
    </ThemeProvider>
  );
}
