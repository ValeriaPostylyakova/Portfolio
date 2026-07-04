import { FC } from 'react';

import { IProject } from '../@types/project.types.ts';
import ReviewProject from '../components/shared/projects/ReviewProject.tsx';
import Title from '../components/ui/Title.tsx';
import { useTranslation } from 'react-i18next';
import { useProjects } from '../api/queries/project.query.ts';
import { ProjectsSkeleton } from '../components/ui/skeletons/ProjectsSkeleton.tsx';

interface ProjectsProps {
    projects: IProject[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
    const { t } = useTranslation();

    const { isLoading } = useProjects();

    if (isLoading) {
        return (
            <div
                className="w-11/12 m-auto flex flex-col gap-8"
                aria-busy="true"
                aria-live="polite"
            >
                {[...Array(5)].map((_, index) => (
                    <ProjectsSkeleton key={index} />
                ))}
            </div>
        );
    }

    return (
        <section id="projects" className="py-10 bg-tertiary">
            <div>
                <Title title={t('selectTitles.projects')} />

                <div className="w-11/12 m-auto flex flex-col gap-8">
                    {projects.map((project) => (
                        <ReviewProject
                            key={project.id || project.id}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
