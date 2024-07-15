import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { destinations } from "../data";

const initialState = {
  region: 'kanto',
  descriptionHeader: "関東地方 Kanto Region",
  descriptionText: "The Kanto region, home to Tokyo, Japan's bustling capital, is known for its modern skyscrapers, historic temples, and vibrant neighborhoods. It is a center of politics, economy, and culture.",
};

const regionSlice = createSlice({
  name: "region",
  initialState,
  reducers: {
    changeRegion: (state, action: PayloadAction<number>) => {
      const current = destinations[action.payload];
      if (current) {
        state.region = current.region;
        state.descriptionHeader = current.descriptionHeader;
        state.descriptionText = current.descriptionText;
      }
    },
  },
});

export const { changeRegion } = regionSlice.actions;
export default regionSlice.reducer;
