import React from "react";
import { Tilt } from 'react-tilt';

import './DisplayProjects.css';

const DisplayProjects  = ({onRoutChange}) =>{
    
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
    
        return (
            <div className="displayProjects">
                <div >
                <Tilt className='br4 shadow-2 elementt' options={defaultOptions} style={{ height: '50vh', width: '60vh' ,border:'2px solid black' ,backgroundColor:'#2B4262' ,margin:20}}>
                    <div> 
                        <button onClick={() =>onRoutChange('XO')} >XO</button>

                    </div>
                </Tilt>
                    
                </div>

                <div >
                <Tilt className='br4 shadow-2 elementt' options={defaultOptions} style={{ height: '50vh', width: '60vh' ,border:'2px solid black' ,backgroundColor:'#2B4262' ,margin:20 }}>
                    <div> 
                        <button onClick={() =>onRoutChange('XO')} >XO</button>

                    </div>
                </Tilt>
                    
                </div>
                
                <div >
                <Tilt className='br4 shadow-2 elementt ' options={defaultOptions} style={{ height: '50vh', width: '60vh' ,border:'2px solid black' ,backgroundColor:'#2B4262' ,margin:20}}>
                    <div> 
                        <button onClick={() =>onRoutChange('XO')} >XO</button>

                    </div>
                </Tilt>
                    
                </div>

                <div >
                <Tilt className='br4 shadow-2 elementt' options={defaultOptions} style={{ height: '50vh', width: '60vh' ,border:'2px solid black' ,backgroundColor:'#2B4262',margin:20 }}>
                    <div> 
                        <button onClick={() =>onRoutChange('XO')} >XO</button>

                    </div>
                </Tilt>
                    
                </div>

                <div >
                <Tilt className='br4 shadow-2 elementt' options={defaultOptions} style={{ height: '50vh', width: '60vh' ,border:'2px solid black' ,backgroundColor:'#2B4262',margin:20 }}>
                    <div> 
                        <button onClick={() =>onRoutChange('XO')} >XO</button>

                    </div>
                </Tilt>
                    
                </div>

                <div >
                <Tilt className='br4 shadow-2 elementt' options={defaultOptions} style={{ height: '50vh', width: '60vh' ,border:'2px solid black' ,backgroundColor:'#2B4262' ,margin:20}}>
                    <div> 
                        <button onClick={() =>onRoutChange('XO')} >XO</button>

                    </div>
                </Tilt>
                    
                </div>


            </div>
        )
    
}

export default DisplayProjects;