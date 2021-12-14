import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

function FooterMenu() {
  return (
    <footer>
      <Box
        className="footer_box"
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        borderBottom={1}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <Box className="menu_top" pb={{ xs: 5, sm: 5 }}>
                Купить
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Купить авто
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Обмен авто
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Онлайн оценка авто
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Предпродажная подготовка
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Техническая гарантия
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box className="menu_top" pb={{ xs: 5, sm: 5 }}>
                Продать
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Продажа через нас
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Выкуп авто
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Trade-in / Обмен авто
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Онлайн оценка авто
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box className="menu_top" pb={{ xs: 5, sm: 5 }}>
                Автокредит
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Кредит без взноса
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Кредит с первым взносом
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Обмен с доплатой в кредит
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Онлайн заявка на кредит
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box className="menu_top" pb={{ xs: 5, sm: 5 }}>
                Автосалон
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  О компании
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Контакты
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Вакансии
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Новости
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Инвесторам
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Наша команда
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default FooterMenu;
