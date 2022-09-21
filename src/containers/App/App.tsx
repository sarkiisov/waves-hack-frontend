import React from 'react';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Slide } from 'react-toastify';
import { theme } from '../../theme';
import Routes from '../Routes';

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
        <Routes />
      </StylesProvider>
    </ThemeProvider>
  );
}
