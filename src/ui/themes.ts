// Theme object interface
export interface ITheme {
  text: string;
  grayText: string;
  lightGrayText: string;
  border: string;
  bar: string;
  linkBackground: string;
  boxShadow: string;
  background: string;
}

// Available themes
export const themes = {
  dark: {
    text: '#eeeeee',
    grayText: '#eeeeee',
    lightGrayText: '#dddddd',
    border: '#212121',
    bar: '#eae7e7',
    boxShadow: '0px 4px 50px rgb(0 0 0 / 16%)',

    background: '#1a1a1a',
    linkBackground: '#baa9ff',
  } as ITheme,
  light: {
    text: '#494949',
    grayText: '#494949',
    lightGrayText: '#8F8F8F',
    border: '#f9f8f8',
    bar: '#eae7e7',
    boxShadow: '0px 4px 50px rgba(233, 233, 233, 0.51)',

    background: '#ffffff',
    linkBackground: '#baa9ff',
  } as ITheme,
};
