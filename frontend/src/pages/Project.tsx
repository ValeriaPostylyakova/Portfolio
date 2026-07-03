import { FC } from 'react';

import { useParams } from 'react-router-dom';
import { useProject } from '../api/queries/project.query.ts';
import ProjectHome from '../components/shared/project/ProjectHome.tsx';
import ProjectInfo from '../components/shared/project/ProjectInfo.tsx';
import Footer from './Footer.tsx';

const Project: FC = () => {
    const { id } = useParams();

    const { data: project, isLoading, isError } = useProject(id);

    if (isError || !project) return <div>Project not found</div>;

    return (
        <div>
            <ProjectHome {...project} isLoading={isLoading} />
            <ProjectInfo {...project} />
            <Footer />
        </div>
    );
};

export default Project;
