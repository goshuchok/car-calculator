import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import logo from '../../images/logo_white.png';
import { Typography } from '@material-ui/core';

function FooterMobileDown() {
  return (
    <div>
      <Box
        className="footer_box_mobile"
        px={{ xs: 1, sm: 3 }}
        py={{ xs: 5, sm: 8 }}
      >
        <Grid container>
          <Grid item xs={9} sm={9}>
            <Box textAlign="left" pb={{ xs: 5, sm: 5 }}>
              С 2011 года, Crystal Motors — Надежные автомобили с пробегом.
              <br />
              Продажа автомобилей с пробегом в Екатеринбурге.
            </Box>
          </Grid>
          <Grid item xs={3} sm={3}></Grid>
          <Grid item xs={6} sm={6}>
            <Typography>Разработка сайта</Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <img src={logo} alt="logo" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default FooterMobileDown;
