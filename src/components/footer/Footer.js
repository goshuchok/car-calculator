import { useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import FooterDown from './FooterDown';
import FooterMenu from './FooterMenu';
import FooterTop from './FooterTop';
import FooterMobile from './FooterMobile';

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      {isMobile ? (
        <FooterMobile />
      ) : (
        <>
          <FooterTop />
          <FooterMenu />
          <FooterDown />
        </>
      )}
    </>
  );
}

export default Footer;
