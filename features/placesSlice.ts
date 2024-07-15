
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Destination } from "../types/index";
import { fakeFetchDestination } from "api/fakeApi";

interface UserState {
    destination: Destination[];
    loading: 'idle' | 'loading' | 'succeeded' | 'failed';
  }
  
  const initialState: UserState = {
    destination: [],
    loading: 'idle'
  };

export const fetchDestination = createAsyncThunk(
    'destination/fetchDestination',
    async (destination: string) => {
        const data = await fakeFetchDestination(destination);
        return data
    }
)

const destinationSlice = createSlice({
    name: "destination",
    initialState,
    reducers: {},
    extraReducers: (bulder) => {
        bulder
        .addCase(fetchDestination.pending, (state) => {
            state.loading = 'loading';  // Устанавливаем состояние загрузки
          })
          .addCase(fetchDestination.fulfilled, (state, action: PayloadAction<any>) => {
            state.destination = action.payload;  // Добавляем данные пользователя в состояние
            state.loading = 'succeeded';  // Устанавливаем состояние успешной загрузки
          })
          .addCase(fetchDestination.rejected, (state, action) => {
            state.loading = 'failed';  // Устанавливаем состояние ошибки
            console.error(action.error.message);  // Логируем ошибку для отладки
          });
    }
})

export default destinationSlice.reducer