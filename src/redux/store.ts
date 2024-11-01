import { configureStore } from '@reduxjs/toolkit';
import { projectsReducer } from './projects/slice.ts';
import { projectReducer } from './project/slice.ts';

export const store = configureStore({
    reducer: {
        projectsReducer,
        projectReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
