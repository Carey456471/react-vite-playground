import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openSidebar } from '../../store/slices/AppSlice';

function Header() {
  const dispatch = useDispatch();

  const isSidebarOpen = useSelector((state) => state.persist.appReducer.isSidebarOpen);

  const handleOpenClick = () => {
    dispatch(openSidebar(!isSidebarOpen));
  };
  return (
    <div className={(isSidebarOpen ? 'ms-[300px]' : 'ms-0') + ' ease-in-out duration-300 h-[50px] bg-green-300'}>
      <div onClick={(e) => handleOpenClick()}>open</div>
    </div>
  );
}

export default Header;
