import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openSidebar } from '../../store/slices/AppSlice';

function Sidebar() {
  const dispatch = useDispatch();

  const isSidebarOpen = useSelector((state) => state.persist.appReducer.isSidebarOpen);

  const handleCloseClick = () => {
    dispatch(openSidebar(false));
    console.log('click');
  };
  return (
    <div
      className={(isSidebarOpen ? 'ms-0' : '-ms-[300px]') + ' ease-in-out duration-300 w-[300px] h-full bg-red-300 z-[100] absolute top-0'}
    >
      <div className="w-full" onClick={(e) => handleCloseClick()}>
        close
      </div>
      <div className="bg-purple-500 w-[40px] h-[40px] flex items-end">test</div>
    </div>
  );
}

export default Sidebar;
