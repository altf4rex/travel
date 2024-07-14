import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

const regionSlice = createSlice({
    name: "region",
    initialState: {region: "kanto"},
    reducers: {
        changeRegion: (state, action: PayloadAction<string>) => {
            state.region = action.payload
        }
    }
})


export const { changeRegion } = regionSlice.actions;

export default regionSlice.reducer;