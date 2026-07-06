import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useTranslation } from 'react-i18next';
import { Form } from '../@types/contact.types.ts';
import { useContact } from '../api/queries/contact.query.ts';
import Title from '../components/ui/Title.tsx';

const Contacts: FC = () => {
    const { t } = useTranslation();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Form>({
        mode: 'onChange',
    });

    const { mutate } = useContact(reset);

    const onSubmit: SubmitHandler<Form> = async (data: Form) => {
        mutate(data);
    };

    return (
        <section id="contacts" className="py-10 min-h-screen bg-contacts">
            <Title title={t('selectTitles.contacts')} />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-primary w-6/12 xl:w-2/3 sm:w-11/12 h-8/12 py-10 m-auto border-xl rounded-md"
            >
                <div className="p-10 flex-col gap-10 sm:p-8 xs:p-6">
                    <label className="font-bold block mb-3 text-sm text-inputText">
                        {t('contactsForm.inputName.label')}
                    </label>
                    <div className="mb-10">
                        <input
                            {...register('name', { required: true })}
                            placeholder={t(
                                'contactsForm.inputName.placeholder'
                            )}
                            className="px-3 outline-none block w-full py-4 bg-inputBg mb-3 rounded-md text-inputText focus:shadow xs:text-sm"
                            type="text"
                        />
                        {errors.name && (
                            <p className="text-red-700">
                                {t('contactsForm.inputName.error')}
                            </p>
                        )}
                    </div>
                    <label className="font-bold block mb-3 text-sm text-inputText">
                        {t('contactsForm.inputEmail.label')}
                    </label>
                    <div className="mb-10">
                        <input
                            {...register('email', {
                                pattern:
                                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
                                required: true,
                            })}
                            placeholder={t(
                                'contactsForm.inputEmail.placeholder'
                            )}
                            className="px-3 outline-none block w-full py-4 bg-inputBg mb-2 rounded-md text-inputText focus:shadow xs:text-sm"
                            type="text"
                        />
                        {errors.email && (
                            <p className="text-red-700">
                                {t('contactsForm.inputEmail.error')}
                            </p>
                        )}
                    </div>

                    <label className="font-bold block mb-3 text-sm text-inputText">
                        {t('contactsForm.inputMessage.label')}
                    </label>
                    <div className="mb-10">
                        <textarea
                            {...register('message', {
                                required: true,
                            })}
                            placeholder={t(
                                'contactsForm.inputMessage.placeholder'
                            )}
                            className="py-4 resize-none px-3 outline-none block w-full bg-inputBg mb-3 rounded-md text-inputText focus:shadow xs:text-sm"
                        />
                        {errors.message && (
                            <p className="text-red-700">
                                {t('contactsForm.inputMessage.error')}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="py-3 px-10 rounded-md mt-4 bg-greenPrimary font-bold duration-300 text-white hover:text-green-700 hover:bg-slate-50 border border-green-700 xs:py-2 xs:px-8"
                    >
                        {t('contactsForm.buttonSubmit')}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Contacts;
