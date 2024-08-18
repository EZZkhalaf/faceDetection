// FaceReco.js
import React from 'react';
import './FaceReco.css';
<<<<<<< HEAD
=======
import Yapping from '../Yapping/Yapping';
>>>>>>> 178b30e7 (the final form - you need to connect to the backend)

const FaceReco = ({ imgurl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='imgg' alt='' src={imgurl} width='500px' height='auto' />
        <div
          className='bounding-box'
          style={{
            top: box.toprow,
            right: box.rightcol,
            bottom: box.bottomrow,
            left: box.leftcol,
          }}
        ></div>
<<<<<<< HEAD
      </div>
=======
       
      </div>
       
>>>>>>> 178b30e7 (the final form - you need to connect to the backend)
    </div>
  );
};

export default FaceReco;
