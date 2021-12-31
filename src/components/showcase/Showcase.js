import React from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import FirstPic from '../../img/pic-1.svg';

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
    marginBottom: '4.7rem',
  },
  text: {
    padding: '5rem 7rem',
  },
  '@media (max-width:414px)': {
    img: {
      marginBottom: '7.2rem',
      width: '100%',
    },
    text: {
      padding: '1rem',
    },
  },
}));

const Showcase = () => {
  const classes = useStyles();
  return (
    <div>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
        <Container maxWidth='lg'>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box className={classes.text}>
                <h1
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: '700',
                  }}>
                  Amazing Experiences from Our Wonderful
                  Customers
                </h1>
                <p
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: '400',
                  }}>
                  Here is what customers and vendors are
                  saying about us, you can share your
                  stories with us too.
                </p>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <img
                  src={FirstPic}
                  alt='first-pic'
                  className={classes.img}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Showcase;
