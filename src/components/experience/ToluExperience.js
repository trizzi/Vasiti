import React from 'react';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import SecondPic from '../../img/pic-2.svg';
import ThirdPic from '../../img/pic-3.svg';

const ToluExperience = () => {
  return (
    <div style={{ background: '#222222', color: '#fff' }}>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
        <Container maxWidth='lg'>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box display='flex' alignItems='flex-end'>
                <img src={SecondPic} alt='second-pic' />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box style={{ padding: '5rem' }}>
                <h2>Tolu & Joy’s Experience</h2>
                <p>
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
