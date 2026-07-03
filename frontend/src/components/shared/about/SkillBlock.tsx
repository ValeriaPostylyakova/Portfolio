import { FC } from 'react';

interface ISkillBlockProps {
    name: string;
}

const SkillBlock: FC<ISkillBlockProps> = ({ name }) => {
    return (
        <div className="rounded-xl bg-grayPrimary text-center px-5 py-3 text-graySecondary font-medium md:text-sm">
            {name}
        </div>
    );
};

export default SkillBlock;
