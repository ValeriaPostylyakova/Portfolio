import { IDevelopmentHistory } from '../@types/development-history.types';
import { api } from './client';

export const getDevelopmentHistory = async () => {
    const { data } = await api.get<IDevelopmentHistory[]>(
        '/development-history/'
    );
    return data;
};
