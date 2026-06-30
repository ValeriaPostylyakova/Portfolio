import { FC } from 'react';
import { TitleProps } from '../ui/Title.tsx';

const SkillBlock: FC<TitleProps> = ({ title }) => {
    return (
        <div className="rounded-xl bg-grayPrimary text-center px-5 py-3 text-graySecondary font-medium md:text-sm">
            {title}
        </div>
    );
};

export default SkillBlock;
