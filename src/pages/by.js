import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@material-ui/core';
// import { getUsersAction } from '../store/actions/usersAction';

function By() {
  const { users } = useSelector((state) => state.usersData);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getUsersAction());
  // }, []);

  return (
    <Container>
      <Typography>By this auto</Typography>
      <Grid>
        {users.map((user) => (
          <Grid item key={user.id} xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {user.username}
                </Typography>
                <Typography variant="h5" component="h2">
                  {user.name}
                </Typography>
                <Typography color="textSecondary">adjective</Typography>
                <Typography variant="body2" component="p">
                  {user.email}
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
