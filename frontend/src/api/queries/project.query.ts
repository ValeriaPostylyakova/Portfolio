import { useQuery } from '@tanstack/react-query';
import { getProject, getProjects } from '../projects';

export function useProjects() {
    return useQuery({
        queryKey: ['projects'],
        queryFn: getProjects,
    });
}

export function useProject(id: string | undefined) {
    return useQuery({
        queryKey: ['project', id],
        queryFn: () => getProject(id!),
        enabled: !!id,
    });
}
