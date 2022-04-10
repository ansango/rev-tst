import fetcher from "@/lib-client/fetcher";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "models/user/user";

import type { AppState, AppThunk } from "../../index";

export interface UserState {
  value: User | null;
  status: "idle" | "loading" | "failed";
}

const initialState: UserState = {
  value: null,
  status: "idle",
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await fetcher("/api/user");
  return response.user;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectUser = (state: AppState) => state.user.value;
export default userSlice.reducer;