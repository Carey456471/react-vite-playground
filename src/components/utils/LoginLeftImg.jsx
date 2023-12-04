import React from 'react';
import loginImg from '../../assets/login_l_img.svg';

function LoginLeftImg() {
    return (
        <div className="w-full h-full items-center flex">
            <img src={loginImg} alt="Login Img" className="scale-[0.8]" />
        </div>
    );
}

export default LoginLeftImg;
