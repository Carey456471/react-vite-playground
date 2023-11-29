import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ProtectedRoute } from "../components";

function Home() {
    const { logoutApi } = useContext(AuthContext);

    const handleLogout = async () => {
        console.log("logout start");

        await logoutApi();

        console.log("logout end");
    };

    return (
        <ProtectedRoute>
            <div className="" onClick={handleLogout}>
                Home
            </div>
        </ProtectedRoute>
    );
}

export default Home;
