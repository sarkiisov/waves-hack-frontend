import { sdk } from "../../config";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setNotification } from "../../utils";

export interface AppContextInterface {
  wallet: any;
  sdk: any;
}

const initialState: AppContextInterface = {
  wallet: null,
  sdk: sdk,
};

export const connectWallet = createAsyncThunk(
  "wallet/connectWallet",
  async function () {
    await window.WEWallet.initialPromise;
    const response = await window.WEWallet.publicState();
    console.log(response);
    return response;
  }
);

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    connect: (state: AppContextInterface, action: PayloadAction<void>) => {
      state.wallet = action.payload;
    },
  },
  extraReducers: {
    [connectWallet.fulfilled.type]: (state: any, action: any) => {
      state.wallet = action.payload;
      setNotification({
        type: "success",
        message: "WEWallet connected",
      });
    },
    [connectWallet.rejected.type]: () => {
      setNotification({
        type: "error",
        message: "WEWallet connection error",
      });
    },
  },
});

export const { connect } = walletSlice.actions;
export const walletReducer = walletSlice.reducer;
