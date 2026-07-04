import { FC } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { useProject } from '../api/queries/project.query.ts';
import ProjectHome from '../components/shared/project/ProjectHome.tsx';
import ProjectInfo from '../components/shared/project/ProjectInfo.tsx';
import Footer from './Footer.tsx';
import NotFound from './NotFound.tsx';
import { useTranslation } from 'react-i18next';

const Project: FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const { data: project, isLoading, isError } = useProject(id);

    const handleBackToProjects = () => {
        navigate('/', { state: { scrollTo: 'projects' } });
    };

    const projectButtons = [
        {
            text: t('notFoundProject.buttonGoProjects'),
            onClick: handleBackToProjects,
            variant: 'secondary' as const,
        },
        {
            text: t('notFoundProject.buttonBack'),
            to: '/',
        },
    ];

    if (isError || !project)
        return (
            <NotFound
                title={t('notFoundProject.title')}
                description={t('notFoundProject.description')}
                buttons={projectButtons}
            />
        );

    return (
        <div>
            <ProjectHome {...project} isLoading={isLoading} />
            <ProjectInfo {...project} />
            <Footer />
        </div>
    );
};

export default Project;
