import React from 'react';
import { ThemeProvider } from 'styled-components';
import colors from './colors/colors';

const theme = {
  colors,
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
