import React from 'react';
import { Global, css } from '@emotion/core';

import styles from './global-styles.css';

const GlobalStyles = () => {
  console.log(styles);
  return (
    <Global
      style={css`
        ${styles}
      `}
    />
  );
};

export default GlobalStyles;
