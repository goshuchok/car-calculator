import { Container, Typography } from '@material-ui/core';
import React from 'react';

function FooterTop() {
  return (
    <div className="top_footer">
      <Container>
        <Typography>
          Вся информация на сайте носит справочный характер и не является
          публичной офертой
        </Typography>
      </Container>
    </div>
  );
}

export default FooterTop;
