import Title from '../components/Title.tsx';
import ReviewProject from '../components/Projects/ReviewProject.tsx';
import { reviewProjects } from '../components/Projects/ReviewProjects.ts';
import { FC } from 'react';

const Projects: FC = () => {
    return (
        <section className="py-10 bg-stone-100">
            <Title title="Projects" />
            <div className="w-11/12 m-auto flex flex-col gap-8">
                {reviewProjects.map((project, index) => (
                    <ReviewProject key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
