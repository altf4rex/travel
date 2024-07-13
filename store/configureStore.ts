
import { configureStore } from '@reduxjs/toolkit';
import destinationReducer from '../features/placesSlice';

export const store = configureStore({
    reducer: {
        data: destinationReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch