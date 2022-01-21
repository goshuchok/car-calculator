import React from 'react';

import { Box, Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function By() {
  return (
    <Container className="pageNotFound">
      <Box sx={{ my: 2 }}>
        <Typography
          variant="h3"
          style={{ color: '#07b1fd', textAlign: 'center' }}
        >
          By this auto
        </Typography>

        <Link className="shine-button" to="/autocredit">
          Перейти к автокредитам
        </Link>
      </Box>
    </Container>
  );
}

export default By;
