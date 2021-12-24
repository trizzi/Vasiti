import React from 'react';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import NinteenthPic from '../../img/pic-19.svg';

const Subfooter = () => {
  return (
    <div
      style={{
        background: '#25201D',
        color: '#fff',
      }}>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
        <Container maxWidth='lg'>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box>
                <img src={NinteenthPic} alt='second-pic' />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <h2>
                  Be a member of our community{' '}
                  <span>🎉</span>
                </h2>
                <p>
                  We’d make sure you’re always first to know
                  what’s happening on Vasiti—thus, the
                  world.
                </p>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Subfooter;
