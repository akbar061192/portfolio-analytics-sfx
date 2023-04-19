import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: {
    user: {},
    error: null,
  },
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.login.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.login.error = action.payload;
    },
  },
});

export default authSlice.reducer;

export const { loginSuccess, loginFailure } = authSlice.actions;
