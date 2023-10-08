import { useContext } from "react";
import { AuthContext } from "../Hook/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    

    if(loading){
        return <div className="text-center"><span className="loading loading-spinner text-secondary"></span></div>
    }

    if (user) {
        return children;
    }

    
return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;