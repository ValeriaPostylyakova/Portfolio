import { ISkill } from '../@types/skills.types';
import { api } from './client';

export const getSkills = async () => {
    const { data } = await api.get<ISkill[]>('/skills/');
    return data;
};
