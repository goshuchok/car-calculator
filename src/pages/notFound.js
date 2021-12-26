import { Box, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Link
          className="shine-button"
          to="/autocredit"
          style={{ textDecoration: 'none' }}
        >
          <Button variant="contained" color="primary">
            Auto Credit
          </Button>
        </Link>
      </Grid>
    </Box>
  );
}

export default NotFound;
