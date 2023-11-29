import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import PublicRoute from "../components/routes/PublicRoute";

function Login() {
    const { loginApi } = useContext(AuthContext);

    const handleLogin = async () => {
        console.log("login start");

        await loginApi();

        console.log("login end");
    };

    return (
        <PublicRoute>
            <div className="w-screen h-screen dark:bg-zinc-700 bg-zinc-100 relative">
                {/* background */}
                <div className="w-screen h-screen overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full ">
                        <path
                            fill="#14b8a6"
                            fillOpacity={0.4}
                            d="M0,288L0,128L180,128L180,160L360,160L360,224L540,224L540,128L720,128L720,32L900,32L900,128L1080,128L1080,224L1260,224L1260,32L1440,32L1440,320L1260,320L1260,320L1080,320L1080,320L900,320L900,320L720,320L720,320L540,320L540,320L360,320L360,320L180,320L180,320L0,320L0,320Z"></path>
                    </svg>
                </div>

                {/* login form */}
                <div className="w-screen h-screen absolute top-0 left-0">
                    <div className="bg-red-300 w-[50px] h-[50px]" onClick={handleLogin}>
                        Login
                    </div>
                </div>
            </div>
        </PublicRoute>
    );
}

export default Login;
