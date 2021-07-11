import React from 'react';
import { GlobalStyle, theme } from './theme/global';
import { ThemeProvider } from 'styled-components';
import Painel from './pages/painel';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Painel />
    </ThemeProvider>
  )
}