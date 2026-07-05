import { useMutation } from '@tanstack/react-query';
import { UseFormReset } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Form } from '../../@types/contact.types';
import { sendFeedback } from '../contact';

export function useContact(reset: UseFormReset<Form>) {
    return useMutation({
        mutationFn: sendFeedback,
        onSuccess: () => {
            toast.success('Сообщение успешно принято в обработку!');
            reset();
        },
        onError: () =>
            toast.error(
                'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте ещё раз или повторите попытку позже'
            ),
    });
}
