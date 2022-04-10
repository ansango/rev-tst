import fetcher from "@/lib-client/fetcher";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Account } from "models/user/user";
import type { AppState } from "../../index";

export interface AccountState {
  value: Account | null;
  status: "idle" | "loading" | "failed";
}

const initialState: AccountState = {
  value: null,
  status: "idle",
};

export const fetchAccount = createAsyncThunk(
  "account/fetchAccount",
  async () => {
    const response = await fetcher("/api/account");
    return response.account;
  }
);
export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    removeAccount: (state) => {
      state.value = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccount.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAccount.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(fetchAccount.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const { removeAccount } = accountSlice.actions;
export const selectAccount = (state: AppState) => state.account.value;
export default accountSlice.reducer;
