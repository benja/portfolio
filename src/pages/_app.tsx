import '../../public/css/reset.css';
import React, { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
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
    }
  }, [theme]);

  return (
    <ThemeProvider theme={activeTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
