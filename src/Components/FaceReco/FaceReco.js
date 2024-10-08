// FaceReco.js
import React from 'react';
import './FaceReco.css';



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

       
      </div>
       
    </div>
  );
};

export default FaceReco;
