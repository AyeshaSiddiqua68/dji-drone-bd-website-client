import { createContext } from "react";
import useDrones from "../hooks/useDrones";
import useFirebase from "../hooks/useFirebase";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const AllContexts = useFirebase();
    const{drones}=useDrones();

    const data={
        AllContexts, drones
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;