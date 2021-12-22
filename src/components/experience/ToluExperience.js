import React from 'react';

import SecondPic from '../../img/pic-2.svg';
import ThirdPic from '../../img/pic-3.svg';

const ToluExperience = () => {
  return (
    <div style={{ background: '#222222', color: '#fff' }}>
      <div>
        <img src={SecondPic} alt='second-pic' />
      </div>

      <div>
        <h2>Tolu & Joy’s Experience</h2>
        <p>
          I had the best experience shopping with vasiti.
          Usability of the website was great, very good
          customer service, an all round great experience. I
          would definately be coming back! I had the best
          experience shopping with vasiti. Usability of the
          website was great, very good customer service, an
          all round great experience. I would definately be
          coming back!
        </p>
        <img src={ThirdPic} alt='third-pic' />
      </div>
    </div>
  );
};

export default ToluExperience;
