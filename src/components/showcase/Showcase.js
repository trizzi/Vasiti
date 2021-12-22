import React from 'react';
import Box from '@material-ui/core/Box';
import FirstPic from '../../img/pic-1.svg';

const Showcase = () => {
  return (
    <div>
      <Box component='span' m={1}>
        <div>
          <h2>
            Amazing Experiences from Our Wonderful Customers
          </h2>
          <p>
            Here is what customers and vendors are saying
            about us, you can share your stories with us
            too.
          </p>
        </div>

        <div>
          <img src={FirstPic} alt='first-pic' />
        </div>
      </Box>
    </div>
  );
};

export default Showcase;
