import { FC } from 'react';

export type TitleProps = {
    title: string;
};

const Title: FC<TitleProps> = ({ title }) => {
    return (
        <div className="flex flex-col items-center justify-center mb-20">
            <h1 className="text-2xl font-bold mb-2 uppercase md:text-xl xs:text-lg">
                {title}
            </h1>
            <div className="w-14 h-1 rounded-md bg-emerald-600 md:w-12 xs:w-10"></div>
        </div>
    );
};

export default Title;
