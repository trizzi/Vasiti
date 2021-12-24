import React from 'react';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import TenthPic from '../../img/pic-10.svg';
import EleventhPic from '../../img/pic-11.svg';
import TwelvethPic from '../../img/pic-12.svg';

const JosiahExperience = () => {
  return (
    <div style={{ background: '#FFF8F5', color: '#000' }}>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
        <Container maxWidth='lg'>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box style={{ padding: '5rem 7rem' }}>
                <h2>Josiah’s Experience</h2>
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
                <img src={TwelvethPic} alt='twelveth-pic' />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box style={{ paddingBottom: '0' }}>
                <div style={{ position: 'absolute' }}>
                  <img src={TenthPic} alt='tenth-pic' />
                </div>

                <div style={{ position: 'relative' }}>
                  <img
                    src={EleventhPic}
                    alt='eleventh-pic'
                  />
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default JosiahExperience;
