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

    const handleTest = () => {
        window.location.href = "#/home123"
    }

    return (
        <ProtectedRoute>
            <div className="" onClick={handleLogout}>
                Home
            </div>
            <div className="bg-red-300 w-[40px] h-[40px]" onClick={handleTest}>
                test
            </div>
        </ProtectedRoute>
    );
}

export default Home;
