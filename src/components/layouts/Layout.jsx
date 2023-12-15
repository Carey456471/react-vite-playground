import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebars/Sidebar';
import Header from '../headers/Header';
import { useSelector } from 'react-redux';

function Layout() {
  const isSidebarOpen = useSelector((state) => state.persist.appReducer.isSidebarOpen);
  return (
    <div className="w-screen h-screen relative ">
      <div className="w-full h-full">
        {/* sidebar */}
        <Sidebar />

        <div className="w-screen">
          {/* header */}
          <Header />

          {/* content */}
          <div
            className={
              (isSidebarOpen ? 'ms-[300px]' : 'ms-0') + ' ease-in-out duration-300 h-[calc(100vh-50px)] bg-yellow-100 overflow-auto'
            }
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
