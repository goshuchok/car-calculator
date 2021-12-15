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
} from '@material-ui/core';
import car from '../../images/car.png';
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
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button color="secondary">Выбрано это авто</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CarsCard;
