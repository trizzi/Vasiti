import React from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  icons: {
    background: '#fff',
    color: '#222',
    padding: '0.5rem',
    borderRadius: '50%',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer
      style={{
        background: '#25201D',
        color: '#fff',
        fontFamily: 'Inter',
        fontWeight: '400',
      }}>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        pt={{ xs: 0, sm: 0 }}>
        <Container maxWidth='lg'>
          <Grid container spacing={5}>
            <Grid item xs={6} sm={2}>
              <Box
                style={{
                  fontFamily: 'Inter',
                  fontWeight: '700',
                }}>
                Company
              </Box>
              <Box>
                <Link
                  href='/about'
                  style={{ color: '#fff' }}>
                  About Us
                </Link>
              </Box>
              <Box>
                <Link href='#' style={{ color: '#fff' }}>
                  Terms Of Use
                </Link>
              </Box>
              <Box>
                <Link href='#' style={{ color: '#fff' }}>
                  Privacy Policy
                </Link>
              </Box>
              <Box>
                <Link href='#' style={{ color: '#fff' }}>
                  Press & Media
                </Link>
              </Box>
            </Grid>
            <Grid item xs={6} sm={2}>
              <Box
                style={{
                  fontFamily: 'Inter',
                  fontWeight: '700',
                }}>
                Products
              </Box>
              <Box>
                <Link href='#' style={{ color: '#fff' }}>
                  Marketplace
                </Link>
              </Box>
              <Box>
                <Link href='#' style={{ color: '#fff' }}>
                  Magazine
                </Link>
              </Box>
              <Box>
                <Link href='#' style={{ color: '#fff' }}>
                  Seller
                </Link>
              </Box>
              <Box>
                <Link href='#' style={{ color: '#fff' }}>
                  Wholesale
                </Link>
              </Box>
              <Box>
                <Link href='#' style={{ color: '#fff' }}>
                  Services
                </Link>
              </Box>
            </Grid>
            <Grid item xs={6} sm={2}>
              <Box
                style={{
                  fontFamily: 'Inter',
                  fontWeight: '700',
                }}>
                Careers
              </Box>
              <Box>
                <Link href='#' style={{ color: '#fff' }}>
                  Become a Campus Rep
                </Link>
              </Box>
              <Box>
                <Link href='#' style={{ color: '#fff' }}>
                  Become a Vasiti Influencer
                </Link>
              </Box>
              <Box>
                <Link href='#' style={{ color: '#fff' }}>
                  Become a Campus writter
                </Link>
              </Box>
              <Box>
                <Link href='#' style={{ color: '#fff' }}>
                  Become an Afflilate
                </Link>
              </Box>
            </Grid>
            <Grid item xs={6} sm={2}>
              <Box
                style={{
                  fontFamily: 'Inter',
                  fontWeight: '700',
                }}>
                Get in touch
              </Box>
              <Box>
                <Link
                  href='/about'
                  style={{ color: '#fff' }}>
                  Contact us
                </Link>
              </Box>
              <Box>
                <Link href='#' style={{ color: '#fff' }}>
                  Partner with us
                </Link>
              </Box>
              <Box>
                <Link href='#' style={{ color: '#fff' }}>
                  Advertise with us
                </Link>
              </Box>
              <Box>
                <Link href='#' style={{ color: '#fff' }}>
                  Help/FAQ
                </Link>
              </Box>
            </Grid>
            <Grid item xs={6} sm={2}>
              <Box
                style={{
                  fontFamily: 'Inter',
                  fontWeight: '700',
                }}>
                Join our community
              </Box>
              <Box style={{ padding: '2rem 0' }}>
                <Link
                  href='/about'
                  style={{
                    color: '#fff',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}>
                  <div className={classes.icons}>
                    <i className='fab fa-facebook-f'></i>
                  </div>
                  <div className={classes.icons}>
                    <i className='fab fa-instagram'></i>
                  </div>
                  <div className={classes.icons}>
                    <i className='fab fa-twitter'></i>
                  </div>
                  <div className={classes.icons}>
                    <i className='fab fa-linkedin-in'></i>
                  </div>
                </Link>
              </Box>
              <Box>
                <Link href='#' style={{ color: '#fff' }}>
                  Email Newsletter
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
