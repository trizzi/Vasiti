import React from 'react';
import NinteenthPic from '../../img/pic-19.svg';

const Subfooter = () => {
  return (
    <div
      style={{
        background: '#25201D',
        color: '#fff',
      }}>
      <div>
        <img src={NinteenthPic} alt='second-pic' />
      </div>

      <div>
        <h2>
          Be a member of our community <span>🎉</span>
        </h2>
        <p>
          We’d make sure you’re always first to know what’s
          happening on Vasiti—thus, the world.
        </p>
      </div>
    </div>
  );
};

export default Subfooter;
