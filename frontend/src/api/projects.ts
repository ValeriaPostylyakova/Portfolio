import { IProject } from '../@types/project.types';
import { api } from './client';

export const getProjects = async () => {
    const { data } = await api.get<IProject[]>('/projects/');
    return data;
};

export const getProject = async (id: string) => {
    const { data } = await api.get<IProject>(`/projects/${id}`);
    return data;
};
