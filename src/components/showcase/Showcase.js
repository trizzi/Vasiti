import React from 'react';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import FirstPic from '../../img/pic-1.svg';

const Showcase = () => {
  return (
    <div>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
        <Container maxWidth='lg'>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box>
                <h2>
                  Amazing Experiences from Our Wonderful
                  Customers
                </h2>
                <p>
                  Here is what customers and vendors are
                  saying about us, you can share your
                  stories with us too.
                </p>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <img src={FirstPic} alt='first-pic' />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* <Box component='span' m={1}>
        <div>
        
        </div>

        <div>
      
        </div>
      </Box> */}
    </div>
  );
};

export default Showcase;
