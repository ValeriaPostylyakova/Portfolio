import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { IProject } from '../@types/project.types.ts';
import { useProjects } from '../api/queries/projects.query.ts';
import ReviewProject from '../components/shared/projects/ReviewProject.tsx';
import { ProjectsSkeleton } from '../components/ui/skeletons/ProjectsSkeleton.tsx';
import Title from '../components/ui/Title.tsx';

interface ProjectsProps {
    projects: IProject[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
    const { t } = useTranslation();

    const { isLoading } = useProjects();

    return (
        <section id="projects" className="py-10 bg-tertiary">
            <div>
                <Title title={t('selectTitles.projects')} />

                {isLoading ? (
                    <div
                        className="w-11/12 m-auto flex flex-col gap-8"
                        aria-busy="true"
                        aria-live="polite"
                    >
                        {[...Array(5)].map((_, index) => (
                            <ProjectsSkeleton key={index} />
                        ))}
                    </div>
                ) : (
                    <div className="w-11/12 m-auto flex flex-col gap-8">
                        {projects.map((project) => (
                            <ReviewProject key={project.id} {...project} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
