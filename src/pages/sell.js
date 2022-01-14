import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';

function Sell() {
  return (
    <Container>
      <Box sx={{ my: 2 }}>
        <Typography
          variant="h3"
          style={{ color: '#07b1fd', textAlign: 'center' }}
        >
          Take the credit of our dream
        </Typography>
      </Box>
    </Container>
  );
}

export default Sell;
