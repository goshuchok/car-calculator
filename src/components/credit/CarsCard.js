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
  CircularProgress,
} from '@material-ui/core';
import shield from '../../images/shield.png';
import { useDispatch, useSelector } from 'react-redux';
import { getUniqueAction } from '../../store/actions/uniqueAction';

function CarsCard({ carApi, handleDelete }) {
  const { unique } = useSelector((state) => state.uniqueData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUniqueAction());
  }, []);

  const car = unique.photoData?.seoLinkB;
  return (
    <div>
      <Card>
        <CardActionArea>
          {car ? (
            <CardMedia
              style={{ height: 0, paddingTop: '56.25%' }}
              image={car}
            />
          ) : (
            <CircularProgress />
          )}
        </CardActionArea>
        <CardActionArea>
          <CardContent>
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
