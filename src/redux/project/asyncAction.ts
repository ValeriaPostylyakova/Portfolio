import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchProject } from './types.ts';

export const fetchProject = createAsyncThunk<FetchProject, number | null>(
    'project/fetchProject',
    async (id) => {
        const { data } = await axios.get(
            `https://aebf21a594b24741.mokky.dev/projects/${id}`
        );
        return data;
    }
);
