import React, { useEffect } from "react";

 import './Greeting.css';
import { useAuthContext } from "../../Context/useAuthContext";


const Greeting = ({name}) =>{

    const {auth_user , setAuthUser} = useAuthContext();
    useEffect(() => {
        const storedUser = localStorage.getItem("auth_user");
        if (storedUser) {
            setAuthUser(storedUser);
        }
    }, [setAuthUser]);

    
    return (
        <div className="fatcat69 text-animation">
                <div className="greet">
                {auth_user ? `Welcome to my site` : "the app is applied to some changes at the moment "}
                </div>
                <div className="centering">
                    <div className="talking">
                        {`my name is ezzeldeen awni khalaf , im studying computer engineering 
                            and i learned HTML/CSS/JS/REACT and node/express and many other things `}
                    
                    </div>

                </div>

        </div>
    )
}

export default Greeting;