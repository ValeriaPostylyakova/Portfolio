import { FC } from 'react';
import { TitleProps } from '../Title.tsx';

const SkillBlock: FC<TitleProps> = ({ title }) => {
    return (
        <div className="rounded-xl bg-stone-200 text-center px-5 py-3 text-stone-500 font-medium">
            {title}
        </div>
    );
};

export default SkillBlock;
