import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background: '#2c3a4b',
    color: '#bdbdbd',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  // secondaryHeading: {
  //   fontSize: theme.typography.pxToRem(15),
  //   color: theme.palette.text.secondary,
  // },
}));

function FooterMobileMenu() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Купить</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Link href="/" color="inherit">
                  Купить авто
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link href="/" color="inherit">
                  Обмен авто
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link href="/" color="inherit">
                  Онлайн оценка авто
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link href="/" color="inherit">
                  Предпродажная подготовка
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Продать</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Link href="/" color="inherit">
                  Продажа через нас
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link href="/" color="inherit">
                  Выкуп авто
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link href="/" color="inherit">
                  Trade-in / Обмен авто
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Автокредит</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Link href="/" color="inherit">
                  Кредит без взноса
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link href="/" color="inherit">
                  Кредит с первым взносом
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link href="/" color="inherit">
                  Обмен с доплатой в кредит
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link href="/" color="inherit">
                  Онлайн заявка на кредит
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Наш салон</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Link href="/" color="inherit">
                  О компании
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link href="/" color="inherit">
                  Контакты
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link href="/" color="inherit">
                  Вакансии
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link href="/" color="inherit">
                  Новости
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link href="/" color="inherit">
                  Инвесторам
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link href="/" color="inherit">
                  Наша команда
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default FooterMobileMenu;
