import React, { useState } from 'react';

import {
  CardMedia,
  CardContent,
  CardActionArea,
  Card,
  Typography,
  Grid,
  CircularProgress,
} from '@material-ui/core';

import shield from '../../images/shield.png';
import no_image from '../../images/no_image.png';
import { useSelector } from 'react-redux';

import CheckedCar from './CheckedCar';

function CarsCard() {
  const { unique } = useSelector((state) => state.uniqueData);
  const { monthsPrice } = useSelector((state) => state.calculator);
  const [selected, setSelected] = useState(false);

  const carImage = unique.photoData?.seoLinkSX ?? no_image;
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
                    image={car.photoData?.seoLinkF ?? no_image}
                  />
                ) : (
                  <CircularProgress />
                )}
              </CardActionArea>
              <CardActionArea
                className={
                  selected !== car.userId ? 'selected ' : 'selected clicked'
                }
              >
                <CardContent>
                  <Typography style={{ color: '#949494', paddingBottom: 10 }}>
                    {car.autoData?.year} год / {car.autoData?.gearboxName}
                  </Typography>
                  <p className="car_name clicked">
                    {car.markName} {car.modelName} {car.autoData?.year} года
                  </p>
                  <Grid
                    container
                    className="card_prices"
                    justifyContent="space-between"
                  >
                    <Grid item sm={6}>
                      <p className="price_black">{car.UAH} UA</p>
                    </Grid>
                    <Grid item sm={6} className="align_text">
                      <p className="month_black">
                        от{' '}
                        {selected === car.userId ? monthsPrice.toFixed(0) : '0'}{' '}
                        UA / мес.
                      </p>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    className="card_prices"
                    justifyContent="space-between"
                  >
                    <Grid item sm={6}>
                      <Grid>
                        <p className="price_blue">{car.UAH} UA</p>
                        <img src={shield} alt="shield" />
                      </Grid>
                    </Grid>
                    <Grid item sm={6} className="align_text">
                      <p className="month_blue">
                        от{' '}
                        {selected === car.userId ? monthsPrice.toFixed(0) : '0'}{' '}
                        UA / мес.
                      </p>
                    </Grid>
                  </Grid>
                  <Grid container className="card_controls">
                    <CheckedCar
                      price={car.UAH}
                      selected={selected === car.userId}
                      handleSelected={() =>
                        setSelected(
                          selected !== car.userId ? car.userId : false
                        )
                      }
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
