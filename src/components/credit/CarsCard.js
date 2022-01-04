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
  FormControlLabel,
} from '@material-ui/core';
import shield from '../../images/shield.png';
import { useDispatch, useSelector } from 'react-redux';
import { getUniqueAction } from '../../store/actions/uniqueAction';

function CarsCard({
  carApi,
  handleDelete,
  selected,
  handleSelected,
  btnClass,
  setBtnClass,
}) {
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
        <CardActionArea className={selected ? 'selected clicked' : 'selected'}>
          <CardContent>
            <Typography style={{ color: '#949494' }}>
              {unique.autoData?.year} год / {unique.autoData?.gearboxName}
            </Typography>
            <p className="car_name clicked">
              {unique.markName} {unique.modelName} {unique.autoData?.year} года
            </p>
            <Grid container>
              <Grid item sm={6}>
                <p className="price_black">{unique.UAH} ₽</p>
              </Grid>
              <Grid item sm={6}>
                <p className="month_black">от 15 000 Р / мес.</p>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item sm={6}>
                <p className="price_blue">
                  {unique.UAH} ₽<img src={shield} alt="shield" />
                </p>
              </Grid>
              <Grid item sm={6}>
                <p className="month_blue">от 15 000 Р / мес.</p>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
        <Button color="secondary">
          Выбрано это авто{' '}
          <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} />
        </Button>
        <CardActions>
          <FormControlLabel
            control={<Checkbox name="checkedA" onClick={handleSelected} />}
            label=" Выбрано это авто"
          />
        </CardActions>
      </Card>
    </div>
  );
}

export default CarsCard;
