import React, { useEffect, useState } from 'react';
import '../../public/css/reset.css';
import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Theme, themes } from '../ui/themes';
import { NextComponentType, NextPageContext } from 'next';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '../redux/store';
import { getTheme, setTheme } from '../redux/slices/themeSlice';

interface MyAppProps extends AppProps {
  Component: {
    Layout?: React.ExoticComponent<{
      children?: React.ReactNode;
    }>;
  } & NextComponentType<NextPageContext, any, {}>;
}

export default function Wrapper({ Component, pageProps, router }: AppProps) {
  return (
    <Provider store={store}>
      <App Component={Component} pageProps={pageProps} router={router} />
    </Provider>
  );
}

export function App({ Component, pageProps }: MyAppProps) {
  const Layout = Component.Layout || React.Fragment;
  const dispatch = useDispatch();
  const reduxTheme = useSelector(getTheme);

  const [theme, setActiveTheme] = useState<Theme>(themes.light);
  let currentValue;
  const select = state => state.theme.name;
  store.subscribe(() => {
    let previousValue = currentValue;
    currentValue = select(store.getState());

    if (previousValue !== currentValue) {
      switch (select(store.getState())) {
        case 'dark':
          setActiveTheme(themes.dark);
          break;
        case 'light':
          setActiveTheme(themes.light);
          break;
      }
    }
  });

  useEffect(() => {
    if (!window.localStorage.getItem('theme')) window.localStorage.setItem('theme', 'light');
    dispatch(setTheme({ name: window.localStorage.getItem('theme') as 'light' | 'dark' }));

    switch (window.localStorage.getItem('theme')) {
      case 'dark':
        setActiveTheme(themes.dark);
        break;
      case 'light':
        setActiveTheme(themes.light);
        break;
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

// Reset default browser styling
const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html {
    min-height: 100vh;
  }

  body {
    min-height: 100vh;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  #__next {
    min-height: 100vh;
  }
`;
