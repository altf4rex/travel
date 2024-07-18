import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { destinations } from "../data";
import { Region } from "types";


const initialState: {data: Region} = {
  data: destinations[6],
};

const regionSlice = createSlice({
  name: "region",
  initialState,
  reducers: {
    changeRegion: (state, action: PayloadAction<number>) => {
        state.data = destinations[action.payload];
    },
    resetRegion: () => initialState
  },
});

export const { changeRegion, resetRegion  } = regionSlice.actions;
export default regionSlice.reducer;
