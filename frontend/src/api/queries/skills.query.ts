import { useQuery } from '@tanstack/react-query';
import { getSkills } from '../skills';

export function useSkills() {
    return useQuery({
        queryKey: ['skills'],
        queryFn: getSkills,
    });
}
