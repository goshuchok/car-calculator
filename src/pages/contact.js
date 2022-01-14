import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';

function Contact() {
  return (
    <Container>
      <Box sx={{ my: 2 }}>
        <Typography
          variant="h3"
          style={{ color: '#07b1fd', textAlign: 'center' }}
        >
          Contact Us
        </Typography>
      </Box>
    </Container>
  );
}

export default Contact;
