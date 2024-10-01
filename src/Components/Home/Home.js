import React from 'react'
import ColorChanger from '../Projects/ColorChanger/ColorChanger';
import XO from '../Projects/XO/XOGame';
import FaceModel from '../FaceModel/FaceModel';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Greeting from '../Greeting/Greeting';
import Yapping from '../Yapping/Yapping';
import FaceReco from '../FaceReco/FaceReco';
import DisplayProjects from '../Projects/Display/DisplayProjects';

export const Home = ({onRoutChange,user,inputChange,buttonClick,imgurl,box , route , name}) => {
  return (
   
        <div className="App">
            <div className="content"> 
               
                <div>
                <div className="nav-bar">
                    <Logo />
                    <Navigation onRoutChange={onRoutChange} />
                </div>
                
                <div>
                    <Greeting name={user.name}/>
                    <Yapping />
                </div>

                <div className="main-content">
                    <div>
                    <FaceReco
                        className="face-reco"
                        imgurl={imgurl}
                        box={box}
                    />
                    </div>
                    <div>
                    {/* here is yapping before */}
                    <DisplayProjects onRoutChange={onRoutChange} />
                    </div>
                </div>
                </div>
           
            </div>
        </div>
   
  )
}
