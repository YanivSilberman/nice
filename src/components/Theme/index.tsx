import * as React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme, { Theme } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
  body {
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
  }
  a {
    text-decoration: none;
    color: ${({ theme: { nice: { color: { black } } } }) => black};

    &:hover {
      color: ${({ theme: { nice: { color: { black } } } }) => black };
    }
  }
`;

interface Props {
  children: any;
  defaultTheme?: 'light' | 'dark';
  primary?: string;
}

const NiceThemeProvider = ({
  children,
  defaultTheme,
  primary
}: Props): JSX.Element => {
  const _theme = theme(defaultTheme, primary);

  return (
    <ThemeProvider theme={ _theme }>
      <GlobalStyle />
      { children }
    </ThemeProvider>
  );
};

export { NiceThemeProvider, Theme, theme };