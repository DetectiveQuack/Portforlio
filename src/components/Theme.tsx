import { createMuiTheme } from '@material-ui/core';
import { blue, teal } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';
import React, { PropsWithChildren } from 'react';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: blue
  }
});

interface props {
  children: React.ReactElement;
}

const Theme: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
