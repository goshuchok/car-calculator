import React from 'react';

import { Box, Container, Typography } from '@material-ui/core';

function By() {
  return (
    <Container>
      <Box sx={{ my: 2 }}>
        <Typography
          variant="h3"
          style={{ color: '#07b1fd', textAlign: 'center' }}
        >
          By this auto
        </Typography>
      </Box>
    </Container>
  );
}

export default By;
