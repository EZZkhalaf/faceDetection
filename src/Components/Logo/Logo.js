import React from 'react';
import { Tilt } from 'react-tilt';
import float_2402882 from './float_2402882.png'
<<<<<<< HEAD

=======
import './Logo.css';
>>>>>>> 178b30e7 (the final form - you need to connect to the backend)
const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Logo= () =>{
    
    return (
<<<<<<< HEAD
        <div className=' '>
            <Tilt className='br4 shadow-2 ' options={defaultOptions} style={{ height: 110, width: 110  }}>
                <div> 
                    <img src={float_2402882} />
=======
        <div className=' child-1'>
            <Tilt className='br4 shadow-2 ' options={defaultOptions} style={{ height: 110, width: 110  }}>
                <div> 
                    <img  src={float_2402882} />
>>>>>>> 178b30e7 (the final form - you need to connect to the backend)
                </div>
            </Tilt>
        </div>
      )
}
export default Logo;