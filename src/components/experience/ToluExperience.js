import React from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import SecondPic from '../../img/pic-2.svg';
import ThirdPic from '../../img/pic-3.svg';

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
    marginBottom: '-5rem',
  },
  text: {
    padding: '5rem',
  },

  '@media (max-width:414px)': {
    img: {
      marginBottom: '0.5rem',
      width: '100%',
    },
    text: {
      padding: '1rem',
    },
  },
}));

const ToluExperience = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        background: '#222222',
        color: '#fff',
        marginTop: '-10rem',
      }}>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
        <Container maxWidth='lg'>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} style={{}}>
              <Box>
                <img
                  src={SecondPic}
                  alt='second-pic'
                  className={classes.img}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box className={classes.text}>
                <h2
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: '700',
                  }}>
                  Tolu & Joy’s Experience
                </h2>
                <p
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: '400',
                  }}>
                  I had the best experience shopping with
                  vasiti. Usability of the website was
                  great, very good customer service, an all
                  round great experience. I would definately
                  be coming back! I had the best experience
                  shopping with vasiti. Usability of the
                  website was great, very good customer
                  service, an all round great experience. I
                  would definately be coming back!
                </p>
                <img src={ThirdPic} alt='third-pic' />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default ToluExperience;
