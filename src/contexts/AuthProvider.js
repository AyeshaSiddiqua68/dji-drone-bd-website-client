import { createContext } from "react";
import useCart from "../hooks/useCart";
import useDrones from "../hooks/useDrones";
import useFirebase from "../hooks/useFirebase";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const AllContexts = useFirebase();
    const { drones, totalPage,currentPage, setCurrentPage} = useDrones();

    const { addToCart, foundedDrone, removeItem, setFoundedDrone } = useCart();

    const data = {
        AllContexts, drones, addToCart, foundedDrone, removeItem, setFoundedDrone, totalPage,currentPage, setCurrentPage
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;