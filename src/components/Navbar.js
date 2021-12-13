import React from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import DrawerComponent from './Drawer';
import Location from './Location';
import Phone from './Phone';
import Logo from './Logo';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#E5E5E5',
  },
  navlinks: {
    display: 'flex',
  },

  link: {
    textDecoration: 'none',
    color: '#00000',
    fontSize: '16px',
    marginLeft: theme.spacing(5),
    '&:hover': {
      color: '#07B1FD',
      borderBottom: '1px solid white',
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar className={classes.appBar} position="static">
      <CssBaseline />
      <Toolbar>
        <Logo />
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/by" className={classes.link}>
              Купить
            </Link>
            <Link to="/sell" className={classes.link}>
              Продать
            </Link>
            <Link to="/autocredit" className={classes.link}>
              Автокредит
            </Link>
            <Link to="contact" className={classes.link}>
              Контакты
            </Link>
          </div>
        )}
        <Location />
        <Phone />
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
