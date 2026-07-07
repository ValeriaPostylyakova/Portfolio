import axios from 'axios';
import i18n from 'i18next';

import { Language } from '../@types/language.types';

const API_URL = import.meta.env.VITE_APP_API_URL;

export const api = axios.create({
    baseURL: `${API_URL}/api/v1/`,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const currentLanguage = i18n.language || Language.EN;

    config.headers['Accept-Language'] = currentLanguage;
    return config;
});
