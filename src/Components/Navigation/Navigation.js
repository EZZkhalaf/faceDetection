import React from "react";
import './Navigation.css';
const Navigation = ({onRoutChange}) =>{
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
            </nav>

}
export default Navigation;


