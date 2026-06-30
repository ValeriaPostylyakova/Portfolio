import { configureStore } from '@reduxjs/toolkit';
import { projectsReducer } from './projects/slice.ts';
import { projectReducer } from './project/slice.ts';
import { menuReducer } from './menu/menu.ts';

export const store = configureStore({
    reducer: {
        projectsReducer,
        projectReducer,
        menuReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
