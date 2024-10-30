import Title from '../components/Title.tsx';
import ReviewProject from '../components/Projects/ReviewProject.tsx';
import { FC } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store.ts';

const Projects: FC = () => {
    const projects = useSelector(
        (state: RootState) => state.projectsReducer.projects
    );
    return (
        <ScrollableAnchor id={'projects'}>
            <section className="py-10 bg-stone-100">
                <Title title="Projects" />
                <div className="w-11/12 m-auto flex flex-col gap-8">
                    {projects.map((project, index) => (
                        <ReviewProject key={index} {...project} />
                    ))}
                </div>
            </section>
        </ScrollableAnchor>
    );
};

export default Projects;
