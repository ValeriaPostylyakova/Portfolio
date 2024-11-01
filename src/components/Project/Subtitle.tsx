import { FC } from 'react';

export type SubtitleProps = {
    text: string;
};

const Subtitle: FC<SubtitleProps> = ({ text }) => {
    return <h2 className="font-bold text-2xl mb-8">{text}</h2>;
};

export default Subtitle;
