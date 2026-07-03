import { FC } from 'react';

import { IDevelopmentHistory } from '../@types/development-history.types.ts';
import { ISkill } from '../@types/skills.types.ts';
import HistoryBlock from '../components/shared/about/HistoryBlock.tsx';
import SkillBlock from '../components/shared/about/SkillBlock.tsx';
import Title from '../components/ui/Title.tsx';

interface IAboutProps {
    skills: ISkill[];
    developmentHistory: IDevelopmentHistory[];
}

const About: FC<IAboutProps> = ({ developmentHistory, skills }) => {
    return (
        <section id="about" className="py-10 bg-secondary min-h-screen">
            <Title title="About" />
            <div className="w-11/12 m-auto px-1 flex justify-between gap-8 md:flex-col md:gap-20">
                <div className="basis-[60%]">
                    <h1 className="text-textPrimary text-2xl font-bold mb-10 md:text-xl xs:text-lg">
                        My development history
                    </h1>
                    <div className="flex flex-col gap-10">
                        {developmentHistory.map((item) => (
                            <HistoryBlock key={item.id} {...item} />
                        ))}
                    </div>
                </div>
                <div className="basis-[50%]">
                    <h1 className="text-textPrimary text-2xl font-bold mb-10 md:text-xl xs:text-lg">
                        My skills
                    </h1>
                    <div className="flex items-center gap-5 flex-wrap">
                        {skills.map((skill) => (
                            <SkillBlock key={skill.id} {...skill} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
