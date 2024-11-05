import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuState } from './types.ts';

const initialState: MenuState = {
    active: false,
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setActive(state, action: PayloadAction<boolean>) {
            state.active = action.payload;
        },
    },
});

export const { reducer: menuReducer, actions: menuActions } = menuSlice;
