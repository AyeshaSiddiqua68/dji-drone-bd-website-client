import { createContext } from "react";
import useCart from "../hooks/useCart";
import useDrones from "../hooks/useDrones";
import useFirebase from "../hooks/useFirebase";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const AllContexts = useFirebase();
    const{drones}=useDrones();

    const{addToCart,foundedDrone, removeItem,setFoundedDrone}=useCart();

    const data={
        AllContexts, drones, addToCart,foundedDrone,removeItem,setFoundedDrone
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;