import { useQuery } from '@tanstack/react-query';
import { getDevelopmentHistory } from '../development-history';

export function useDevelopmentHistory() {
    return useQuery({
        queryKey: ['development-history'],
        queryFn: getDevelopmentHistory,
    });
}
