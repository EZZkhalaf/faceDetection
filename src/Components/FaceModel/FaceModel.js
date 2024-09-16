import React from "react";
import Imagelink from "../Imagelink/Imagelink";
import FaceReco from "../FaceReco/FaceReco";
import Rank from "../Rank/Rank";

import './FaceModel.css';

const FaceModel =({name , entries ,inputChange , buttonClick , imgurl , box ,onRoutChange}) =>{
    



    

        // const {name , entries ,inputChange , buttonClick , imgurl , box} = this.props;
        return(
            <div className="cc">
                <div className='fatcat90'>
                    <div className='explain'>
                        {`this is a project for face detection, you enter a photo link that has a face
                        in it and the pretrained AI model detect the face and increment your score where
                            i store and update it in the database `}
                     </div>
                    <div className="cont1">
                        <div className="first">

                            <Rank name={name} entries={entries} />
                        </div>
                    
                    </div>
                            <Imagelink inputChange={inputChange} buttonClick={buttonClick} />
                        <div className="main-content">
                            <div>
                                <FaceReco
                                className="face-reco"
                                imgurl={imgurl}
                                box={box}
                                />
                            </div>
                        </div>
                </div>
                <footer>
                <button className="play-again" onClick={() => onRoutChange('home')}>go home </button>

                </footer>
            </div>
        );
    }


export default FaceModel;



