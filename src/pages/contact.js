import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import { getUsersAction } from '../store/actions/usersAction';
import { useDispatch } from 'react-redux';
function Contact() {
  const dispatch = useDispatch();
  return (
    <Container>
      <Typography>Contact Us</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(getUsersAction())}
      >
        Get Users
      </Button>
    </Container>
  );
}

export default Contact;
