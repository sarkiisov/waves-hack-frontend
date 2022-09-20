import React from 'react';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { theme } from '../../theme';
import Routes from '../Routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <CssBaseline />
        <Routes />
      </StylesProvider>
    </ThemeProvider>
  );
}
