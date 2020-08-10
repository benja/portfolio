// Theme object interface
export interface ITheme {
  text: string;
  grayText: string;
  lightGrayText: string;
  border: string;
  blue: string;
  purple: string;
}

// Available themes
export const themes = {
  light: {
    text: '#494949',
    grayText: '#494949',
    lightGrayText: '#8F8F8F',
    border: '#a5a5a5',

    blue: '#a9e5ff',
    purple: '#baa9ff',
  } as ITheme,
};
