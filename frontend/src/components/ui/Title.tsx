import { FC } from 'react';

export type TitleProps = {
    title: string;
    mb?: number;
};

const Title: FC<TitleProps> = ({ title, mb }) => {
    return (
        <div
            className={`flex flex-col items-center justify-center mb-${mb ?? 20}`}
        >
            <h1 className="text-textPrimary text-2xl font-bold mb-2 uppercase md:text-xl xs:text-lg">
                {title}
            </h1>
            <div className="w-14 h-1 rounded-md bg-greenSecondary md:w-12 xs:w-10"></div>
        </div>
    );
};

export default Title;
