import { createSlice } from '@reduxjs/toolkit';
import { sliceKeys } from '../../utils/keys';
import { windowSize } from '../../utils/constants';

// ==============================|| states ||============================== //
const initialState = {
  isSidebarOpen: true,
  screen: { x: window.innerWidth, y: window.innerHeight }
};

// ==============================|| slice ||============================== //
export const AppSlice = createSlice({
  name: sliceKeys.app,
  initialState,
  reducers: {
    openSidebar: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
    setScreenSize: (state, action) => {
      state.screen = action.payload;
      if (state.screen.x < windowSize.md) {
        state.isSidebarOpen = false;
      } else if (state.screen.x > windowSize.lg) {
        state.isSidebarOpen = true;
      }
    }
  }
});

export const { openSidebar, setScreenSize } = AppSlice.actions;
export default AppSlice.reducer;
