import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const useStyles = makeStyles((theme) => ({
  logo: {
    cursor: 'pointer',
  },
  root: {
    [theme.breakpoints.between('xs', 'md')]: {
      order: 1,
    },
  },
}));

function Logo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img src={logo} alt="logo" className={classes.logo} />
      </Link>
    </div>
  );
}

export default Logo;
