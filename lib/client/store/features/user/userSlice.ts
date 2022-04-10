import fetcher from "@/lib-client/fetcher";
import { onSignInService, onSignOutService } from "@/lib-client/services/auth";
import { onSaveUserService } from "@/lib-client/services/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "models/user/user";

import type { AppState } from "../../index";

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

export const signIn = createAsyncThunk(
  "user/signIn",
  async ({ email, password }: { email: string; password: string }) => {
    const response = await onSignInService({ email, password });
    return response;
  }
);

export const signOut = createAsyncThunk("user/signOut", async () => {
  await onSignOutService();
  return null;
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user: User) => {
    const response = await onSaveUserService({ user });
    return response;
  }
);

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
    builder
      .addCase(signIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(signIn.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(signOut.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signOut.fulfilled, (state) => {
        state.status = "idle";
        state.value = null;
      })
      .addCase(signOut.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(updateUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(updateUser.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectUser = (state: AppState) => state.user.value;
export default userSlice.reducer;
