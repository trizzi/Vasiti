import React from 'react';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Link } from '@material-ui/core';

const Footer = () => {
  return (
    <footer
      style={{
        background: '#25201D',
        color: '#fff',
      }}>
      <Box>
        <Container maxWidth='lg'>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <Box>Company</Box>
              <Box>
                <Link href='/about'>About Us</Link>
              </Box>
              <Box>
                <Link href='#'>Terms Of Use</Link>
              </Box>
              <Box>
                <Link href='#'>Privacy Policy</Link>
              </Box>
              <Box>
                <Link href='#'>Press & Media</Link>
              </Box>
              <Box>Products</Box>
              <Box>
                <Link href='#'>Marketplace</Link>
              </Box>
              <Box>
                <Link href='#'>Magazine</Link>
              </Box>
              <Box>
                <Link href='#'>Seller</Link>
              </Box>
              <Box>
                <Link href='#'>Wholesale</Link>
              </Box>
              <Box>
                <Link href='#'>Services</Link>
              </Box>
              <Box>Careers</Box>
              <Box>
                <Link href='#'>Become a Campus Rep</Link>
              </Box>
              <Box>
                <Link href='#'>
                  Become a Vasiti Influencer
                </Link>
              </Box>
              <Box>
                <Link href='#'>
                  Become a Campus writter
                </Link>
              </Box>
              <Box>
                <Link href='#'>Become an Afflilate</Link>
              </Box>
              <Box>Get in touch</Box>
              <Box>
                <Link href='/about'>Contact us</Link>
              </Box>
              <Box>
                <Link href='#'>Partner with us</Link>
              </Box>
              <Box>
                <Link href='#'>Advertise with us</Link>
              </Box>
              <Box>
                <Link href='#'>Help/FAQ</Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
