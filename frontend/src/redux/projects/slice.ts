import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project, ProjectState } from './types.ts';

const initialState: ProjectState = {
    projects: [],
};

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setProjects(state, action: PayloadAction<Project[]>) {
            state.projects = action.payload;
        },
    },
});

export const { reducer: projectsReducer, actions: projectsActions } =
    projectsSlice;
