import { FC, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useProject } from '../api/queries/projects.query.ts';
import ProjectHome from '../components/shared/project/ProjectHome.tsx';
import ProjectInfo from '../components/shared/project/ProjectInfo.tsx';
import Footer from './Footer.tsx';
import NotFound from './NotFound.tsx';

const Project: FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        scrollTo(0, 0);
    }, []);

    const { data: project, isLoading, isError } = useProject(id);

    const handleBackToProjects = () => {
        navigate('/', { state: { scrollToProjects: true } });
    };

    if (isError)
        return (
            <NotFound
                title={t('notFoundProject.title')}
                description={t('notFoundProject.description')}
                buttons={[
                    {
                        text: t('notFoundProject.buttonGoProjects'),
                        onClick: handleBackToProjects,
                        variant: 'secondary' as const,
                    },
                    {
                        text: t('notFoundProject.buttonBack'),
                        to: '/',
                    },
                ]}
            />
        );

    return (
        <div>
            <ProjectHome project={project} isLoading={isLoading} />
            <ProjectInfo
                project={project}
                isLoading={isLoading}
                handleBackToProjects={handleBackToProjects}
            />
            <Footer />
        </div>
    );
};

export default Project;
