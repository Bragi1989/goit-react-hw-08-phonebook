import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  logOutThunk,
  loginThunk,
  refreshThunk,
  registerThunk,
} from './operations';
import { toast } from 'react-toastify';

const initialState = {
  isLoading: false,
  error: null,
  authenticated: false,
  token: null,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
        state.userData = payload.user;
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
        state.userData = payload.user;
      })
      .addCase(logOutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.userData = payload;
      })

      .addMatcher(
        isAnyOf(
          loginThunk.pending,
          registerThunk.pending,
          refreshThunk.pending,
          logOutThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          registerThunk.rejected,
          refreshThunk.rejected,
          logOutThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
          toast.info(
            'Incorrectly entered data ! Please enter correct information!',
            {}
          );
        }
      ),
});

export const authReducer = authSlice.reducer;
