import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@material-ui/core';

function By() {
  const { users } = useSelector((state) => state.usersData);

  return (
    <Container>
      <Typography>By this auto</Typography>
      <Grid container spacing={3}>
        {users.map((user, index) => (
          <Grid item key={index} xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {user.id}
                </Typography>
                <Typography variant="h5" component="h2">
                  {user.name}
                </Typography>
                <Typography color="textSecondary">adjective</Typography>
                <Typography variant="body2" component="p">
                  {user.age}
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default By;
