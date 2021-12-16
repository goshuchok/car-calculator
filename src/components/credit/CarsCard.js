import React from 'react';

import {
  CardHeader,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Card,
  Typography,
  IconButton,
  Grid,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import car from '../../images/car.png';
import shield from '../../images/shield.png';
import { DeleteOutline } from '@material-ui/icons';

function CarsCard({ note, handleDelete }) {
  return (
    <div>
      <Card>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutline />
            </IconButton>
          }
          title={note.name}
          subheader={note.value}
        />
        <CardActionArea>
          <CardMedia style={{ height: 0, paddingTop: '56.25%' }} image={car} />
        </CardActionArea>
        <CardActionArea>
          <CardContent>
            <Typography>{note.name}</Typography>
            <Typography>{note.value}</Typography>
            <Typography>2013 год / автомат</Typography>
            <Typography>Hyundai Solaris 2013 года</Typography>
            <Grid container>
              <Grid item sm={6}>
                <Typography>499 000 ₽</Typography>
              </Grid>
              <Grid item sm={6}>
                <Typography>от 15 000 Р / мес.</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item sm={6}>
                <Typography>
                  499 000 ₽<img src={shield} alt="shield" />
                </Typography>
              </Grid>
              <Grid item sm={6}>
                <Typography>от 15 000 Р / мес.</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button color="secondary">
            Выбрано это авто{' '}
            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} />
          </Button>
          {/* <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="Secondary"
          /> */}
        </CardActions>
      </Card>
    </div>
  );
}

export default CarsCard;
