import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import PublicRoute from '../components/routes/PublicRoute';
import { LoginForm, LoginLeftImg } from '../components';

function Login() {
    return (
        <PublicRoute>
            <div className="w-screen h-screen dark:bg-zinc-700 bg-zinc-100 relative">
                {/* background */}
                <div className="w-screen h-screen overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full ">
                        <path
                            fill="#14b8a6"
                            fillOpacity={0.4}
                            d="M0,288L0,128L180,128L180,160L360,160L360,224L540,224L540,128L720,128L720,32L900,32L900,128L1080,128L1080,224L1260,224L1260,32L1440,32L1440,320L1260,320L1260,320L1080,320L1080,320L900,320L900,320L720,320L720,320L540,320L540,320L360,320L360,320L180,320L180,320L0,320L0,320Z"
                        ></path>
                    </svg>
                </div>

                {/* login containter */}
                <div className="w-screen h-screen absolute top-0 left-0">
                    <div className="w-full h-full flex justify-center items-center overflow-auto">
                        <div className=" max-w-3xl w-full h-[500px] max-h-screen mx-auto flex shadow-[0px_0px_10px_2px] shadow-zinc-600 dark:shadow-zinc-800 rounded-md">
                            {/* left img */}
                            <div className="md:block md:w-[50%] bg-zinc-200/80 dark:bg-zinc-700/90 hidden rounded-s-md shadow-[2px_1px_5px_1px] shadow-zinc-600 dark:shadow-zinc-900 z-10 ">
                                <LoginLeftImg />
                            </div>
                            {/* right form */}
                            <div className="w-full md:w-[50%] bg-zinc-100 dark:bg-zinc-800 rounded-md md:rounded-s-none">
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicRoute>
    );
}

export default Login;
