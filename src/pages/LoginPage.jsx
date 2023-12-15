import React from 'react';
import PublicRoute from '../components/routes/PublicRoute';
import { LoginBackground, LoginForm, LoginLeftImg } from '../components';

function LoginPage() {
  return (
    <PublicRoute>
      <div className="w-screen h-screen dark:bg-zinc-700 bg-zinc-100 relative">
        {/* background */}
        <LoginBackground />

        {/* login form */}
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

export default LoginPage;
