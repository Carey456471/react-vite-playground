import React from "react";
import robot404Img from "../assets/robot_404.svg";

function Page404() {
  return (
    <div className="w-screen h-screen absolute top-0 dark:bg-zinc-700 bg-zinc-100">
      <img src={robot404Img} alt="404" />
    </div>
  );
}

export default Page404;
