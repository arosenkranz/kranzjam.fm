import { theme } from '@chakra-ui/core';
const customTheme = {
  ...theme,
  fonts: {
    body: 'neue-haas-unica, sans-serif',
    heading: 'neue-haas-unica, sans-serif',
    mono: 'ibm-plex-mono, sans-serif',
  },
  fontWeights: {
    thin: 200,
    normal: 400,
    bold: 700,
  },
  colors: {
    ...theme.colors,
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
    themeOne: {
      caribbeangreen: '#04e596',
      ebonyclay: '#2b3642',
      nebula: '#d3dedd',
      gray: '#85929d',
      foam: '#cafce8',
      violet: '#711afd',
      riptide: '#93ece3',
    },
  },
};
export default customTheme;
