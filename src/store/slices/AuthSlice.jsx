import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { sliceKeys, storageKeys, thunkKeys } from '../../utils/keys';
import { timeout } from '../../utils/utils';
import { jwtData } from '../../data/jwt';
import { userData } from '../../data/user';
import secureLocalStorage from 'react-secure-storage';

// ==============================|| states ||============================== //
const initialState = {
  user: {},
  token: '',
  refreshToken: '',
  auth: false
};

// ==============================|| async functions ||============================== //
// login api
export const loginApi = createAsyncThunk(thunkKeys.login, async (user, thunkApi) => {
  try {
    let result = {};
    console.log('get jwt token');
    // TODO : call login api

    //simulate api request delay
    await timeout(200);

    // TODO : set axios token header

    result.jwt = jwtData;

    console.log('get user info');
    // TODO : call get user info api

    // simulate api request delay
    await timeout(200);
    result.user = userData;
    return result;
  } catch (error) {
    console.log(error);
    return thunkApi.rejectWithValue('login error');
  }
});

// logout api
export const logoutApi = createAsyncThunk(thunkKeys.logout, async () => {
  try {
    // TODO : call logut api

    // simulate api request delay
    await timeout(200);
  } catch (error) {}
});

// ==============================|| slice ||============================== //
export const AuthSlice = createSlice({
  name: sliceKeys.auth,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // handle loginApi success
    builder.addCase(loginApi.fulfilled, (state, action) => {
      // update state
      state.user = action.payload.user;
      state.token = action.payload.jwt.token;
      state.refreshToken = action.payload.jwt.refresh_token;
      state.auth = true;

      // // update local storage
      // secureLocalStorage.setItem(storageKeys.user, action.payload.user);
      // secureLocalStorage.setItem(storageKeys.token, action.payload.jwt.token);
      // secureLocalStorage.setItem(storageKeys.refreshToken, action.payload.jwt.refresh_token);
    });

    // handle logoutApi success
    builder.addCase(logoutApi.fulfilled, (state, action) => {
      // empty state
      state.user = {};
      state.token = '';
      state.refreshToken = '';
      state.auth = false;

      // // remove local sotrage
      // secureLocalStorage.removeItem(storageKeys.user);
      // secureLocalStorage.removeItem(storageKeys.token);
      // secureLocalStorage.removeItem(storageKeys.refreshToken);
    });
  }
});

// export const { test } = AuthSlice.actions;
export default AuthSlice.reducer;
