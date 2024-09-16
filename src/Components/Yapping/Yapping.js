import React from "react";
import './Yapping.css'
import 'tachyons';
const Yapping =() => {
    return (
        
        <div className="yapp">

            <p style={{  padding:'40px' , color:'black'}} className="yapP">
                This project is a web-based application built using React,
                designed to offer a seamless user experience for signing 
                in and interacting with various features. The application 
                utilizes Clarifai's API for advanced image recognition, 
                specifically color detection, allowing users to analyze 
                and detect colors in uploaded images. The front end 
                stylish, responsive design elements from the Tachyons CSS framework
                to ensure a visually appealing and user-friendly interface. The SignIn component
                 provides a secure and intuitive form for user authentication, with a 
                focus on accessibility and modern web standards. Overall, this project 
                demonstrates the integration of powerful AI capabilities with a sleek and
                functional web application.</p>
        
                <img className='br4' src="https://m.media-amazon.com/images/I/51y8GUVKJoL._AC_UF894,1000_QL80_.jpg" width='20%' height ='20%'/>
                <br />
            </div>  
        );
}

export default Yapping;