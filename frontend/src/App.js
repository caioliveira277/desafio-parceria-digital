import React from 'react';
import { GlobalStyle, theme } from './theme/global';
import { ThemeProvider } from 'styled-components';
import Routes from './routes/routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  )
}