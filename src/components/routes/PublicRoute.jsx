import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import { routes } from "../../utils/routes";

function PublicRoute({ children }) {
    const { isAuth } = useContext(AuthContext);

    if (isAuth()) {
        return <Navigate to={routes.home} />;
    }
    return children;
}

export default PublicRoute;
