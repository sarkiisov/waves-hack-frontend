import React, { useCallback } from 'react';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Slide } from 'react-toastify';
import Particles from 'react-tsparticles';
import { IOptions, RecursivePartial } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { theme } from '../../theme';
import Routes from '../Routes';
import Layout from "../Layout/Layout";


import { backgroundConfig } from '../../assets';

export default function App() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <Particles
          id="tsparticles"
          options={backgroundConfig as RecursivePartial<IOptions>}
          init={particlesInit}
        />
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
