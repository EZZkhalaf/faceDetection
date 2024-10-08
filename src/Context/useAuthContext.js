import { createContext, useContext, useState } from "react";



export const AuthContext = createContext();

export const useAuthContext = ()=>{
    return useContext(AuthContext);
}

export const AuthContextProvider = ({children}) =>{
    const [auth_user,setAuthUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    return <AuthContext.Provider value={{auth_user , setAuthUser}}> {children} </AuthContext.Provider>

}