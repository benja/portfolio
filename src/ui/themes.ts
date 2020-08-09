// Theme object interface
export interface ITheme {
  text: string;
  grayText: string;
  lightGrayText: string;
}

// Available themes
export const themes = {
  light: {
    text: '#494949',
    grayText: '#494949',
    lightGrayText: '#8F8F8F',
  } as ITheme,
};
