import { FC } from 'react';
import ProjectHomeSkeleton from './ProjectHomeSkeleton';

type ProjectHomeProps = {
    title: string;
    description: string;
    projectUrl: string;
    isLoading: boolean;
};

const ProjectHome: FC<ProjectHomeProps> = ({
    title,
    description,
    projectUrl,
    isLoading,
}) => {
    return (
        <section className="h-screen grid place-items-center bg-home bg-cover bg-no-repeat">
            {isLoading ? (
                <ProjectHomeSkeleton />
            ) : (
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4 uppercase xs:text-2xl xxs:text-xl text-textPrimary">
                        {title}
                    </h1>
                    <p className="text-xl mb-12 xs:text-lg xxs:text-base text-grayTertiary">
                        {description}
                    </p>
                    <a
                        className="px-10 py-3 rounded-md bg-greenPrimary text-white xs:py-2 xs:px-8"
                        href={projectUrl}
                        target="_blank"
                    >
                        Open project
                    </a>
                </div>
            )}
        </section>
    );
};

export default ProjectHome;
