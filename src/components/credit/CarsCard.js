import React, { useEffect, useState } from 'react';

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
  MenuItem,
} from '@material-ui/core';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import shield from '../../images/shield.png';
import { useDispatch, useSelector } from 'react-redux';
import { getUniqueAction } from '../../store/actions/uniqueAction';
import { getSearchAction } from '../../store/actions/searchAction';

function CarsCard() {
  const { unique } = useSelector((state) => state.uniqueData);

  const [selected, setSelected] = useState(false);
  const handleSelected = () => {
    selected ? setSelected(false) : setSelected(true);
  };

  console.log('unique', unique);

  const carImage = unique.photoData?.seoLinkB;
  return (
    <div>
      {unique.length === 0 ? (
        <Typography>Cars not found</Typography>
      ) : (
        <Typography>Cars {unique.length}: auto</Typography>
      )}

      <Grid container spacing={3}>
        {unique.map((car) => (
          <Grid key={car.userId} item xs={12} md={6} lg={4}>
            <Card>
              <CardActionArea>
                {carImage ? (
                  <CardMedia
                    style={{ height: 0, paddingTop: '56.25%' }}
                    image={carImage}
                  />
                ) : (
                  <CircularProgress />
                )}
              </CardActionArea>
              <CardActionArea
                className={selected ? 'selected clicked' : 'selected'}
              >
                <CardContent>
                  <Typography style={{ color: '#949494', paddingBottom: 10 }}>
                    {unique.autoData?.year} год / {unique.autoData?.gearboxName}
                  </Typography>
                  <p className="car_name clicked">
                    {unique.markName} {unique.modelName} {unique.autoData?.year}{' '}
                    года
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
                          checkedIcon={
                            <CircleChecked className="checked_circle" />
                          }
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
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CarsCard;
