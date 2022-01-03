import React, { useEffect } from 'react';

import {
  CardHeader,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Card,
  Typography,
  Grid,
  Checkbox,
} from '@material-ui/core';
import car from '../../images/car.png';
import shield from '../../images/shield.png';
import { useDispatch, useSelector } from 'react-redux';
import { getUniqueAction } from '../../store/actions/uniqueAction';

function CarsCard({ carApi, handleDelete }) {
  const { unique } = useSelector((state) => state.uniqueData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUniqueAction());
  }, []);
  // console.log('unique ', unique);
  // const car = unique.photoData?.all?.shift().toString();
  return (
    <div>
      <Card>
        {/* <CardHeader title={carApi.name} subheader={carApi.value} /> */}

        <CardActionArea>
          <CardMedia style={{ height: 0, paddingTop: '56.25%' }} image={car} />
          {/* <CardMedia>
            <img src={'https://developers.ria.com' + car} alt="car" />
          </CardMedia> */}
        </CardActionArea>
        <CardActionArea>
          <CardContent>
            {/* <Typography>{carApi.name}</Typography>
            <Typography>{carApi.value}</Typography> */}
            <Typography>
              {unique.autoData?.year} год / {unique.autoData?.gearboxName}
            </Typography>
            <Typography>
              {unique.markName} {unique.modelName} {unique.autoData?.year} года
            </Typography>
            <Grid container>
              <Grid item sm={6}>
                <Typography>{unique.UAH} ₽</Typography>
              </Grid>
              <Grid item sm={6}>
                <Typography>от 15 000 Р / мес.</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item sm={6}>
                <Typography>
                  {unique.UAH} ₽<img src={shield} alt="shield" />
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
