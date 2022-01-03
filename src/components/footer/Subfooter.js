import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import NinteenthPic from '../../img/pic-19.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0.5rem',
  },
  img: {
    marginTop: '-3.3rem',
  },
  input: {
    display: 'flex',
    justifyContent: 'space-between',
    background: 'rgba(255, 255, 255, 0.2)',
    width: '60%',
    borderRadius: '6px',
  },

  '@media(max-width:768px)': {
    img: {
      width: '100%',
    },
    text: {
      padding: '1rem',
    },
    input: {
      width: '80%',
    },
  },

  '@media (max-width:414px)': {
    img: {
      marginTop: '0',
      width: '100%',
    },
    input: {
      width: '90%',
    },
  },
}));

const Subfooter = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        background: '#25201D',
        color: '#fff',
      }}>
      <Box className={classes.root}>
        <Container maxWidth='lg'>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box>
                <img
                  src={NinteenthPic}
                  alt='ninreenth-pic'
                  className={classes.img}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <h1>
                  Be a member <br />
                  of our community
                  <span role='img' aria-label='bla'>
                    🎉
                  </span>
                </h1>
                <p
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: '400',
                  }}>
                  We’d make sure you’re always first to know
                  <br />
                  what’s happening on Vasiti—thus, the
                  world.
                </p>
                <form className={classes.input}>
                  <div
                    style={{
                      color: '#fff',
                      padding: '0.5rem 1rem',

                      // height: '10px',
                    }}>
                    <InputBase placeholder='Enter your email address' />
                  </div>
                  <button style={{ margin: '0.25rem' }}>
                    SUBSCRIBE
                  </button>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Subfooter;
