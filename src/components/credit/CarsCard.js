import React, { useEffect } from 'react';

import {
  CardMedia,
  CardContent,
  CardActionArea,
  Card,
  Typography,
  Grid,
  Checkbox,
  CircularProgress,
  FormControlLabel,
} from '@material-ui/core';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
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
  }, [dispatch]);

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
            <Typography style={{ color: '#949494', paddingBottom: 10 }}>
              {unique.autoData?.year} год / {unique.autoData?.gearboxName}
            </Typography>
            <p className="car_name clicked">
              {unique.markName} {unique.modelName} {unique.autoData?.year} года
            </p>
            <Grid
              container
              className="card_prices"
              justifyContent="space-between"
            >
              <Grid item sm={6}>
                <p className="price_black">{unique.UAH} ₽</p>
              </Grid>
              <Grid item sm={6} className="align_text">
                <p className="month_black">от 15 000 Р / мес.</p>
              </Grid>
            </Grid>
            <Grid
              container
              className="card_prices"
              justifyContent="space-between"
            >
              <Grid item sm={6}>
                <Grid>
                  <p className="price_blue">{unique.UAH} ₽</p>
                  <img src={shield} alt="shield" />
                </Grid>
              </Grid>
              <Grid item sm={6} className="align_text">
                <p className="month_blue">от 15 000 Р / мес.</p>
              </Grid>
            </Grid>
            <Grid container className="card_controls">
              <FormControlLabel
                style={{ margin: 0 }}
                control={
                  <Checkbox
                    icon={<CircleUnchecked />}
                    checkedIcon={<CircleChecked className="checked_circle" />}
                    onClick={handleSelected}
                  />
                }
                labelPlacement="start"
                label=" Выбрано это авто"
                className="form_control"
              />
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default CarsCard;
