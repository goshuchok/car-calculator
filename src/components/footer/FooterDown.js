import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import logo from '../../images/logo_white.png';

function FooterDown() {
  return (
    <div>
      <Box
        className="footer_box"
        px={{ xs: 3, sm: 8 }}
        py={{ xs: 5, sm: 8 }}
        borderBottom={1}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box textAlign="left" pb={{ xs: 5, sm: 0 }}>
                Crystal Motors (с) {new Date().getFullYear()}
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box textAlign="right" pb={{ xs: 5, sm: 0 }}>
                Разработка сайта
                <img src={logo} alt="logo" className="logo_footer" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default FooterDown;
