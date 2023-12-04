import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function LoginForm() {
    const {loginApi} = useContext(AuthContext)

    const handleLogin = async () => {
        console.log('login start');

        await loginApi();

        console.log('login end');
    }

    return (
        <div className=" justify-center items-center flex flex-col h-full dark:text-zinc-100 text-zinc-700 px-5">
            <div className="w-full h-[350px] bg-zinc-200 dark:bg-zinc-600 p-3 pt-5 rounded-md shadow-md relative ">
                {/* form icon */}
                <div
                    className="w-[42px] h-[42px] rounded-full dark:bg-zinc-600 bg-zinc-200 flex justify-center items-center 
             shadow-[0px_5px_10px_1px] shadow-zinc-400/80 dark:shadow-zinc-700/80 z-10 absolute -top-[20px] left-[44%]"
                >
                    <i className="fa-solid fa-shield-cat text-2xl -ms-[1px]"></i>
                </div>

                {/* form */}
                <div className="py-3 mb-3 text-lg">Login</div>

                {/* username or email input */}
                <div className="text-xs py-1">
                    Username or Email address <span className="text-red-500">*</span>
                </div>
                <input
                    type="text"
                    className="mb-4 px-1 border outline-none dark:border-zinc-300 border-zinc-600 w-full rounded-sm dark:bg-zinc-700"
                />

                {/* password input */}
                <div className="text-xs py-1 ">
                    Password <span className="text-red-500">*</span>
                </div>
                <input
                    type="password"
                    className="mb-4 px-1 border outline-none dark:border-zinc-300 border-zinc-600 w-full rounded-sm dark:bg-zinc-700"
                />

                {/* login button */}
                <div className="my-2 w-full h-[35px] text-center bg-indigo-500 hover:bg-indigo-600 hover:shadow-md py-1 rounded-sm cursor-pointer text-zinc-100"
                onClick={handleLogin}>
                    Login
                </div>

                {/* forget password */}
                <div className="w-full text-center text-[10px] text-zinc-400 dark:text-zinc-300">Forget Passowrd?</div>

                {/* register account */}
                <div className="w-full text-center text-[10px] mt-[30px]">
                    Dont't have an account? <span className="text-indigo-400 cursor-pointer hover:underline hover:text-indigo-500">Register Now</span>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
