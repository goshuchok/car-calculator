import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

function SliderCalculation({ value, valueMonth }) {
  const { unique } = useSelector((state) => state.uniqueData);

  function calculate() {
    const totalPrice = Number(`${unique.UAH}`);
    const firstPrice = parseInt(totalPrice * (value / 100));
    const creditSum = totalPrice - firstPrice;
    const creditMonth = valueMonth;
    console.log(creditSum);
    console.log(creditMonth);
    const authenticPay = Math.floor(
      creditSum * (17 / 100 / (1 + 17 / 100) - creditMonth - 1) * -1
    ).toFixed(2);
    return authenticPay;
  }

  return (
    <Container>
      <Box borderTop={1}>
        <Grid container direction="row" spacing={4}>
          <Grid item lg={3} md={3} sm={6}>
            <p className="car_cost">Стоимость авто</p>
            <p className="car_sum">{unique.UAH} ₽</p>
          </Grid>
          <Grid item lg={3} md={3} sm={6}>
            <p className="car_cost">Ежемесячный платёж</p>
            <p className="car_sum">{calculate()} ₽</p>
          </Grid>

          <Grid item lg={6} md={6} sm={12} />
        </Grid>
      </Box>
    </Container>
  );
}

export default SliderCalculation;

// На сторінці відобразити перших 10 оголошень, реалізувати можливість вибору одного з варіантів для подальшого розрахунку платежу по кредиту. Формула розрахунку ануїтетного платежу (А) являє собою таке співвідношення: А = К * (П / (1 + П) -М-1), де К - сума кредиту (різниця між ціною в оголошені і першим вкладом який в свою чергу потрібно отримати з елементу повзунка що відображений на макеті), П - процентна ставка (17%), М - кількість місяців. Результат розрахунку відобразити в блоці з підписом "Ежемесячный платёж"

// ціна в оголошенні 923930 == ЦО
// перший вклад  ==  ПВ = ЦО * %(14%)  тобто 923930 * 0,14 = 129350,20
// сума кредиту  К = ЦО -ПВ   923930 - 129350,20
