
import { configureStore } from '@reduxjs/toolkit';
import destinationReducer from '../features/placesSlice';
import regionReducer from 'features/regionSlice';

export const store = configureStore({
    reducer: {
        destination: destinationReducer,
        region: regionReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch