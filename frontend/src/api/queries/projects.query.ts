import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { getProject, getProjects } from '../projects';

export function useProjects() {
    const { i18n } = useTranslation();

    return useQuery({
        queryKey: ['projects', i18n.language],
        queryFn: getProjects,
    });
}

export function useProject(id: string | undefined) {
    const { i18n } = useTranslation();

    return useQuery({
        queryKey: ['project', id, i18n.language],
        queryFn: () => getProject(id!),
        enabled: !!id,
    });
}
