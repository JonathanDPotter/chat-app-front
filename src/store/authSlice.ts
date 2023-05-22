import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "./localStorage.ts";

export interface AuthUser {
  _id: string;
  username: string;
  token: string;
}

export interface AuthSliceState {
  user: AuthUser | null;
}

const persistedState = loadState();

const initialState = persistedState
  ? ({
      user: persistedState.auth.user,
    } as AuthSliceState)
  : ({ user: null } as AuthSliceState);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
