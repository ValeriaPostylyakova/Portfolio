import Title from '../components/Title.tsx';
import HistoryBlock from '../components/About/HistoryBlock.tsx';
import { aboutHistory } from '../components/About/AboutHistory.ts';
import { aboutSkills } from '../components/About/AboutSkill.ts';
import SkillBlock from '../components/About/SkillBlock.tsx';

const About = () => {
    return (
        <section id="about" className="py-10 bg-stone-50 min-h-screen">
            <Title title="About" />
            <div className="w-11/12 m-auto px-1 flex justify-between md:flex-col md:gap-20">
                <div>
                    <h1 className="text-2xl font-bold mb-10 md:text-xl xs:text-lg">
                        My development history
                    </h1>
                    <div className="flex flex-col gap-10">
                        {aboutHistory.map((item) => (
                            <HistoryBlock key={item.description} {...item} />
                        ))}
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-10 md:text-xl xs:text-lg">
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
