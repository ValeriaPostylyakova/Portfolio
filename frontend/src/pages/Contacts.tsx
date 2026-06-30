import axios from 'axios';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Modal from '../components/shared/contacts/Modal.tsx';
import Title from '../components/ui/Title.tsx';

type Form = {
    name: string;
    email: string;
    massage: string;
};

const Contacts: FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Form>({
        mode: 'onChange',
    });

    const [active, setActive] = useState<boolean>(false);
    const onSubmit: SubmitHandler<Form> = async (data: Form) => {
        try {
            await axios.post(
                'https://aebf21a594b24741.mokky.dev/massages',
                data
            );
            setActive(true);
            reset();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section id="contacts" className="py-10 min-h-screen bg-contacts">
            <Title title="Contacts" />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-primary w-6/12 xl:w-2/3 sm:w-11/12 h-8/12 py-10 m-auto border-xl rounded-md"
            >
                <div className="p-10 flex-col gap-10 sm:p-8 xs:p-6">
                    <label className="font-bold block mb-3 text-sm text-inputText">
                        Name
                    </label>
                    <div className="mb-10">
                        <input
                            {...register('name', { required: true })}
                            placeholder="Enter your name"
                            className="px-3 outline-none block w-full py-4 bg-inputBg mb-3 rounded-md text-inputText focus:shadow xs:text-sm"
                            type="text"
                        />
                        {errors.name && (
                            <p className="text-red-700">
                                This field is required
                            </p>
                        )}
                    </div>
                    <label className="font-bold block mb-3 text-sm text-inputText">
                        Email
                    </label>
                    <div className="mb-10">
                        <input
                            {...register('email', {
                                pattern:
                                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
                                required: true,
                            })}
                            placeholder="Enter your e-mail"
                            className="px-3 outline-none block w-full py-4 bg-inputBg mb-2 rounded-md text-inputText focus:shadow xs:text-sm"
                            type="text"
                        />
                        {errors.email && (
                            <p className="text-red-700">
                                Enter the correct address
                            </p>
                        )}
                    </div>

                    <label className="font-bold block mb-3 text-sm text-inputText">
                        Message
                    </label>
                    <div className="mb-10">
                        <textarea
                            {...register('massage', {
                                required: true,
                            })}
                            placeholder="Enter your message"
                            className="py-4 resize-none px-3 outline-none block w-full bg-inputBg mb-3 rounded-md text-inputText focus:shadow xs:text-sm"
                        />
                        {errors.massage && (
                            <p className="text-red-700">
                                This field is required
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="py-3 px-10 rounded-md mt-4 bg-greenPrimary font-bold duration-300 text-white hover:text-green-700 hover:bg-slate-50 border border-green-700 xs:py-2 xs:px-8"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <Modal active={active} setActive={setActive} />
        </section>
    );
};

export default Contacts;
