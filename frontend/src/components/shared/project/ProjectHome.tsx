import { FC } from 'react';
import { ProjectHomeSkeleton } from '../../ui/skeletons/ProjectHomeSkeleton';
import { useTranslation } from 'react-i18next';
import { IProject } from '../../../@types/project.types';

type ProjectHomeProps = {
    project?: IProject;
    isLoading: boolean;
};

const ProjectHome: FC<ProjectHomeProps> = ({ project, isLoading }) => {
    const { t } = useTranslation();

    return (
        <section className="h-screen grid place-items-center bg-home bg-cover bg-no-repeat">
            {isLoading ? (
                <ProjectHomeSkeleton />
            ) : (
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4 uppercase xs:text-2xl xxs:text-xl text-textPrimary">
                        {project?.title}
                    </h1>
                    <p className="text-xl mb-12 xs:text-lg xxs:text-base text-grayTertiary">
                        {project?.description}
                    </p>
                    <a
                        className="px-10 py-3 rounded-md bg-greenPrimary text-white xs:py-2 xs:px-8 cursor-pointer hover:opacity-80 transition-opacity"
                        href={project?.project_url}
                        target="_blank"
                    >
                        {t('project.buttonOpenProject')}
                    </a>
                </div>
            )}
        </section>
    );
};

export default ProjectHome;
