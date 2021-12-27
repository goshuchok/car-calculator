import { makeStyles } from '@material-ui/core';
import phone from '../../images/phone.png';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.between('xs', 'md')]: {
      order: 3,
    },
  },
  none: {
    [theme.breakpoints.only('xs')]: {
      display: 'none',
    },
  },
}));

function Phone() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <a className="phone__links" href="tel:+79946643627">
        <img className="phone__icons" alt="phone" src={phone}></img>
        <p className={classes.none}>+7 994-664-36-27</p>
      </a>
    </div>
  );
}
export default Phone;
