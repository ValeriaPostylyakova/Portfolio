import Title from '../components/Title.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import Modal from '../components/Contacts/Modal.tsx';

type Form = {
    name: string;
    email: string;
    massage: string;
};

const Contacts = () => {
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
        <section
            id="contacts"
            className="bg-[url('/bg-home.jpg')] py-10 h-screen"
        >
            <Title title="Contacts" />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white w-6/12 xl:w-2/3 sm:w-11/12 h-8/12 py-10 m-auto border-xl rounded-md"
            >
                <div className="p-10 flex-col gap-10 sm:p-8 xs:p-6">
                    <label className="font-bold block mb-3 text-sm text-neutral-600">
                        Name
                    </label>
                    <div className="mb-10">
                        <input
                            {...register('name', { required: true })}
                            placeholder="Enter your name"
                            className="px-3 outline-none block w-full py-4 bg-neutral-100 mb-3 rounded-md text-neutral-600 focus:shadow xs:text-sm"
                            type="text"
                        />
                        {errors.name && (
                            <p className="text-red-700">
                                This field is required
                            </p>
                        )}
                    </div>
                    <label className="font-bold block mb-3 text-sm text-neutral-600">
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
                            className="px-3 outline-none block w-full py-4 bg-neutral-100 mb-2 rounded-md text-neutral-600 focus:shadow xs:text-sm"
                            type="text"
                        />
                        {errors.email && (
                            <p className="text-red-700">
                                Enter the correct address
                            </p>
                        )}
                    </div>

                    <label className="font-bold block mb-3 text-sm text-neutral-600">
                        Message
                    </label>
                    <div className="mb-10">
                        <textarea
                            {...register('massage', {
                                required: true,
                            })}
                            placeholder="Enter your message"
                            className="py-4 resize-none px-3 outline-none block w-full bg-neutral-100 mb-3 rounded-md text-neutral-600 focus:shadow xs:text-sm"
                        />
                        {errors.massage && (
                            <p className="text-red-700">
                                This field is required
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="py-3 px-10 rounded-md mt-4 bg-green-700 font-bold duration-300 text-white hover:text-green-700 hover:bg-slate-50 border border-green-700 xs:py-2 xs:px-8"
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
