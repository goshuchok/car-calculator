import { makeStyles } from '@material-ui/core';
import logo from '../../images/logo.png';

const useStyles = makeStyles((theme) => ({
  logo: {
    cursor: 'pointer',
  },
}));

function Logo() {
  const classes = useStyles();
  return (
    <>
      <img src={logo} alt="logo" className={classes.logo} />
    </>
  );
}

export default Logo;
