import axios from 'axios';
import i18n from 'i18next';

import { Language } from '../@types/language.types';

export const api = axios.create({
    baseURL: 'http://localhost:8000/api/v1/',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const currentLanguage = i18n.language || Language.RU;

    config.headers['Accept-Language'] = currentLanguage;
    return config;
});
