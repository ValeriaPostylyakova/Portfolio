import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { getDevelopmentHistory } from '../development-history';

export function useDevelopmentHistory() {
    const { i18n } = useTranslation();

    return useQuery({
        queryKey: ['development-history', i18n.language],
        queryFn: getDevelopmentHistory,
    });
}
