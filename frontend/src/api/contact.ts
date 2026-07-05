import { Form } from '../@types/contact.types';
import { api } from './client';

export const sendFeedback = async (data: Form) => {
    const { data: response } = await api.post('/send-feedback-email/', data);
    return response;
};
