import '../../public/css/reset.css';
import React, { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { themes } from '../ui/themes';
import { Store } from '../undux/store';

export const MyApp = ({ Component, pageProps }: AppProps) => {
  // Undux store (using Undux because Redux is too much for a small portfolio like this)
  const store = Store.useStore();

  // Theme states
  const [theme, setTheme] = useState('light');
  const [activeTheme, setActiveTheme] = useState(themes.light);

  // Get theme from localStorage or Undux store
  useEffect(() => {
    store.on('theme').subscribe((theme: string) => {
      setTheme(theme);
    });
  });

  // Set active theme
  useEffect(() => {
    // Set theme based on last theme
    setTheme(window.localStorage.getItem('theme') || 'light');
    store.set('theme')(window.localStorage.getItem('theme') || 'light');

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
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

// Wrapper so we can use Undux hooks in this file
const Wrapper = ({ Component, router, pageProps }: AppProps) => {
  return (
    <Store.Container>
      <MyApp Component={Component} router={router} pageProps={pageProps} />
    </Store.Container>
  );
};

const GlobalStyle = createGlobalStyle<any>`
body {
  background: ${props => props.theme.background};
}`;

export default Wrapper;
