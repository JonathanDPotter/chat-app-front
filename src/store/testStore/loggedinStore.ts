import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { AuthSliceState } from "../authSlice.ts";
import { postApi } from "../postApiSlice.ts";

interface StoreUser {
  _id: string;
  username: string;
  token: string;
}

const initialState = {
  user: { _id: "1234", username: "test", token: "1234" },
} as AuthSliceState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.user!.token = action.payload;
    },
    setUser: (state, action: PayloadAction<StoreUser>) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

const testStore = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [postApi.reducerPath]: postApi.reducer,
    auth: authSlice.reducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

export default testStore;
