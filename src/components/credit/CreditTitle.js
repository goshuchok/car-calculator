import React from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  credit_title: {
    color: '#2c2c2c',
    fontSize: 64,
    [theme.breakpoints.between('xs', 'md')]: {
      fontSize: 30,
    },
  },
}));

function CreditTitle() {
  const classes = useStyles();
  return (
    <Box py={{ xs: 3, sm: 8 }}>
      <Container>
        <Grid item xs={12} sm={12}>
          <h1 className={classes.credit_title}>
            Оформление заявки
            <br /> на автокредит
          </h1>
        </Grid>
      </Container>
    </Box>
  );
}

export default CreditTitle;
