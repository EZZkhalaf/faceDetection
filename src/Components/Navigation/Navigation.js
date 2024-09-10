import React,{useState} from "react";
import './Navigation.css';
const Navigation = ({onRoutChange}) =>{
    const[modal,setModal] = useState(false);

    const toggleModal = () =>{
        setModal(!modal);
    }

    return <nav className="flexy">
                       

                
                <button 
                onClick={() => onRoutChange('signin')}
                className="button-28" 
                role="button">
                    Sign Out
                </button>

                <button 
                onClick={() => onRoutChange('register')}
                className="button-28" 
                role="button">
                    register
                </button>

                <button 
                onClick={toggleModal}
                className="button-28" 
                role="button">
                    About this
                </button>


                {modal && (
                    <div>
                        <div className="modal-overlay"></div> {/* Renamed 'overlay' to 'modal-overlay' */}
                        <div className='modal-container'> {/* Renamed 'modal-content' to 'modal-container' */}
                            <button className='modal-close-button' onClick={toggleModal}>X</button> {/* Renamed 'closing-tab' to 'modal-close-button' */}
                            <h1>Hello</h1>
                            <div>
                                <p className='modal-description'> {/* Renamed 'yapping' to 'modal-description' */}
                                   this project is a combination of many projects that i made in the past using html/css/js/etc... , 
                                   and i gathered all of htem here idk why but i guess i wass
                                   bored </p>
                                   <p className='modal-description'>the project will be has some changes in the future of course </p>
                            </div>
                        </div>
                    </div>
                )}


            </nav>

}
export default Navigation;


