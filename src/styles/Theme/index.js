/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

const theme = {
  colors: {
    dark: '#0D0D0D',
    darkgray: '#262626',
    lightgray: '#D9D9D9',
    gray: '#8C8C8B',
    light: '#F2F1F0',
    white: '#FFFFFF',
  },
  font: {
    // aktiv grotesk
    default: {
      fontFamily: 'aktiv-grotesk, sans-serif',
      weight: {
        normal: '400',
        bold: '700',
      },
      style: {
        italic: 'italic',
      },
    },
    // aktiv grotesk extended
    extended: {
      fontFamily: 'aktiv-grotesk-extended, sans-serif',
      weight: {
        normal: '400',
        bold: '700',
      },
      style: {
        italic: 'italic',
      },
    },
    // aktiv grotesk thin
    thin: {
      fontFamily: 'aktiv-grotesk-thin, sans-serif',
      weight: {
        thin: '200',
      },
      style: {
        italic: 'italic',
      },
    },
  },
};

const Theme = (props) => {
  return <ThemeProvider theme={theme} {...props} />;
};

export default Theme;
