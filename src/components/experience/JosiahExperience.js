import React from 'react';
import { Container } from '@material-ui/core';
import TenthPic from '../../img/pic-10.svg';
import EleventhPic from '../../img/pic-11.svg';
import TwelvethPic from '../../img/pic-12.svg';

const JosiahExperience = () => {
  return (
    <div style={{ background: '#FFF8F5', color: '#000' }}>
      <Container>
        <div>
          <h2>Josiah’s Experience</h2>
          <p>
            I had the best experience shopping with vasiti.
            Usability of the website was great, very good
            customer service, an all round great experience.
            I would definately be coming back! I had the
            best experience shopping with vasiti. Usability
            of the website was great, very good customer
            service, an all round great experience. I would
            definately be coming back!
          </p>
          <img src={TwelvethPic} alt='twelveth-pic' />
        </div>

        <div>
          <img src={TenthPic} alt='tenth-pic' />
          <img src={EleventhPic} alt='eleventh-pic' />
        </div>
      </Container>
    </div>
  );
};

export default JosiahExperience;
