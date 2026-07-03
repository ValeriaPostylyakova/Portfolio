import { FC } from 'react';

import { IProject } from '../@types/project.types.ts';
import ReviewProject from '../components/shared/projects/ReviewProject.tsx';
import Title from '../components/ui/Title.tsx';

interface ProjectsProps {
    projects: IProject[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
    return (
        <section id="projects" className="py-10 bg-tertiary">
            <div>
                <Title title="Projects" />
                <div className="w-11/12 m-auto flex flex-col gap-8">
                    {projects.map((project, index) => (
                        <ReviewProject key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
