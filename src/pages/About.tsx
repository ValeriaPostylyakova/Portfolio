import { FC } from 'react';

import { aboutHistory } from '../components/shared/about/AboutHistory.ts';
import { aboutSkills } from '../components/shared/about/AboutSkill.ts';

import HistoryBlock from '../components/shared/about/HistoryBlock.tsx';
import SkillBlock from '../components/shared/about/SkillBlock.tsx';
import Title from '../components/ui/Title.tsx';

const About: FC = () => {
    return (
        <section id="about" className="py-10 bg-secondary min-h-screen">
            <Title title="About" />
            <div className="w-11/12 m-auto px-1 flex justify-between gap-8 md:flex-col md:gap-20">
                <div className="basis-[60%]">
                    <h1 className="text-textPrimary text-2xl font-bold mb-10 md:text-xl xs:text-lg">
                        My development history
                    </h1>
                    <div className="flex flex-col gap-10">
                        {aboutHistory.map((item) => (
                            <HistoryBlock key={item.description} {...item} />
                        ))}
                    </div>
                </div>
                <div className="basis-[50%]">
                    <h1 className="text-textPrimary text-2xl font-bold mb-10 md:text-xl xs:text-lg">
                        My skills
                    </h1>
                    <div className="flex items-center gap-5 flex-wrap">
                        {aboutSkills.map((title, index) => (
                            <SkillBlock key={index} {...title} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
