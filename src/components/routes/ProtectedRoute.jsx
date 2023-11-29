import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { routes } from "../../utils/routes";

function ProtectedRoute({children}) {
    const { isAuth } = useContext(AuthContext);
    const location = useLocation()

    if (!isAuth()){
        return <Navigate to={routes.login} replace state={{from : location}}/>
    }

    return children
}

export default ProtectedRoute;
