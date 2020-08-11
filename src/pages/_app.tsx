import '../../public/css/reset.css';
import React, { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { themes } from '../ui/themes';

function MyApp({ Component, pageProps }: AppProps) {
  // Active theme
  const [theme] = useState('light'); // Optimally get value from localStorage or user's system preferences
  const [activeTheme, setActiveTheme] = useState(themes.light);

  // Set current theme
  useEffect(() => {
    switch (theme) {
      case 'light':
        setActiveTheme(themes.light);
        break;
      case 'dark':
        setActiveTheme(themes.dark);
        break;
    }
  }, [theme]);

  return (
    <ThemeProvider theme={activeTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle<any>`
body {
  background: ${props => props.theme.background};
}`;

export default MyApp;
