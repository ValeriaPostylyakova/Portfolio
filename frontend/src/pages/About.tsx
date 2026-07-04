import { FC } from 'react';

import { IDevelopmentHistory } from '../@types/development-history.types.ts';
import { ISkill } from '../@types/skills.types.ts';
import HistoryBlock from '../components/shared/about/HistoryBlock.tsx';
import SkillBlock from '../components/shared/about/SkillBlock.tsx';
import Title from '../components/ui/Title.tsx';
import { useTranslation } from 'react-i18next';
import { useDevelopmentHistory } from '../api/queries/development-history.query.ts';
import { HistoryBlockSkeleton } from '../components/ui/skeletons/HistoryBlockSkeleton.tsx';
import { useSkills } from '../api/queries/skills.query.ts';
import { SkillBlockSkeleton } from '../components/ui/skeletons/SkillBlockSkeleton.tsx';

interface IAboutProps {
    skills: ISkill[];
    developmentHistory: IDevelopmentHistory[];
}

const About: FC<IAboutProps> = ({ developmentHistory, skills }) => {
    const { t } = useTranslation();

    const { isLoading: isLoadingDevHistory } = useDevelopmentHistory();
    const { isLoading: isLoadingSkills } = useSkills();

    return (
        <section id="about" className="py-10 bg-secondary">
            <Title title={t('selectTitles.about')} />
            <div className="w-11/12 m-auto px-1 flex justify-between gap-8 md:flex-col md:gap-20">
                <div className="basis-[60%]">
                    <h1 className="text-textPrimary text-2xl font-bold mb-10 md:text-xl xs:text-lg">
                        {t('developmentHistoryTitle')}
                    </h1>
                    {isLoadingDevHistory ? (
                        <div className="flex flex-col gap-10">
                            {[...new Array(4)].map((id) => (
                                <HistoryBlockSkeleton key={id} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col gap-10">
                            {developmentHistory.map((item) => (
                                <HistoryBlock key={item.id} {...item} />
                            ))}
                        </div>
                    )}
                </div>
                <div className="basis-[50%]">
                    <h1 className="text-textPrimary text-2xl font-bold mb-10 md:text-xl xs:text-lg">
                        {t('skillsTitle')}
                    </h1>
                    {isLoadingSkills ? (
                        <div className="flex flex-wrap gap-5">
                            <SkillBlockSkeleton />
                        </div>
                    ) : (
                        <div className="flex flex-wrap gap-5">
                            {skills.map((item) => (
                                <SkillBlock key={item.id} {...item} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default About;
