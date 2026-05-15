import { FC } from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

export type ModalProps = {
    active: boolean;
    setActive: (value: boolean) => void;
};

const Modal: FC<ModalProps> = ({ active, setActive }) => {
    const onClickModal = () => {
        setActive(false);
    };

    return (
        <div
            className={
                active
                    ? 'transition-all duration-700 fixed left-0 z-40 w-full h-full top-0'
                    : 'transition-all duration-700 fixed left-0 z-40 w-full h-full -top-full'
            }
        >
            <div className="absolute left-1/2 top-0 -ml-28 xs:-ml-36 bg-white rounded-md shadow p-5">
                <div className="w-full">
                    <p className="flex items-center gap-3 mb-5">
                        Message successfully sent!
                        <IoCheckmarkCircleOutline className="w-7 h-7 text-green-700" />
                    </p>
                    <button
                        onClick={onClickModal}
                        className="py-0.5 px-7 rounded-md text-white bg-green-700 font-medium"
                    >
                        Ok
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
