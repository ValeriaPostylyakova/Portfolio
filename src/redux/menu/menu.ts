import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type MenuProps = {
    active: boolean;
};

const initialState = {
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
