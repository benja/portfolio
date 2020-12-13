export const themes = {
  light: {
    text: '#494949',
    grayText: '#222222',
    lightGrayText: '#8F8F8F',
    border: '#f9f8f8',
    bar: '#eae7e7',
    boxShadow: '0px 4px 50px rgba(233, 233, 233, 0.51)',

    background: '#ffffff',
    linkBackground: '#baa9ff',
  },
  dark: {
    text: '#494949',
    grayText: '#222222',
    lightGrayText: '#8F8F8F',
    border: '#f9f8f8',
    bar: '#eae7e7',
    boxShadow: '0px 4px 50px rgba(233, 233, 233, 0.51)',

    background: '#ffffff',
    linkBackground: '#baa9ff',
  },
};

export type Theme = typeof themes.light;
