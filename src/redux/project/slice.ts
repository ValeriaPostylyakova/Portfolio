import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProjectState, Status } from './types.ts';
import { fetchProject } from './asyncAction.ts';

const initialState: ProjectState = {
    projectId: null,
    project: {
        id: 0,
        title: '',
        description: '',
        imageUrl: '',
        link: '',
        linkGitHub: '',
        tools: [],
        relizes: [],
        possibilities: [],
    },
    status: Status.LOADING,
};

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        setProjectId(state, action: PayloadAction<number>) {
            state.projectId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProject.pending, (state) => {
            state.status = Status.LOADING;
        });
        builder.addCase(fetchProject.fulfilled, (state, action) => {
            state.status = Status.SUCCESS;
            state.project = action.payload;
        });
        builder.addCase(fetchProject.rejected, (state) => {
            state.status = Status.ERROR;
        });
    },
});

export const { reducer: projectReducer, actions: projectActions } =
    projectSlice;
