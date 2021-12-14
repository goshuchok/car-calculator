import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';

function CreditTitle() {
  return (
    <Box py={{ xs: 3, sm: 8 }}>
      <Container>
        <Grid item xs={12} sm={12}>
          <h1 className="credit_title">
            Оформление заявки
            <br /> на автокредит
          </h1>
        </Grid>
      </Container>
    </Box>
  );
}

export default CreditTitle;
