import { configureStore } from '@reduxjs/toolkit';
import { projectsReducer } from './projects/slice.ts';

export const store = configureStore({
    reducer: {
        projectsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;