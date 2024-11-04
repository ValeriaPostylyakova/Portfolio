import Title from '../components/Title.tsx';
import ReviewProject from '../components/Projects/ReviewProject.tsx';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store.ts';

const Projects: FC = () => {
    const projects = useSelector(
        (state: RootState) => state.projectsReducer.projects
    );

    return (
        <section id="projects" className="py-10 bg-stone-100">
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
