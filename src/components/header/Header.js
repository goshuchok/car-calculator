import React from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  useTheme,
  useMediaQuery,
  Container,
} from '@material-ui/core';
import DrawerComponent from './Drawer';
import Location from './Location';
import Phone from './Phone';
import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container>
      <AppBar className="header" position="static">
        <CssBaseline />
        <Toolbar className="toolBar">
          <Logo />
          {isMobile ? <DrawerComponent /> : <Navigation />}
          <Location />
          <Phone />
        </Toolbar>
      </AppBar>
    </Container>
  );
}
export default Header;
