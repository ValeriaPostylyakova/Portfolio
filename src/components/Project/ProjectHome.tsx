import { FC } from 'react';
import { Status } from '../../redux/project/types.ts';
import ProjectHomeSkeleton from './ProjectHomeSkeleton.tsx';

type ProjectHomeProps = {
    title: string | undefined;
    description: string | undefined;
    link: string | undefined;
    status: Status;
};

const ProjectHome: FC<ProjectHomeProps> = ({
    title,
    description,
    link,
    status,
}) => {
    return (
        <section className="h-screen grid place-items-center bg-[url('/Portfolio/background-home.avif')] bg-cover bg-no-repeat">
            {status === 'loading' ? (
                <ProjectHomeSkeleton />
            ) : (
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4 uppercase">
                        {title}
                    </h1>
                    <p className="text-xl mb-12">{description}</p>
                    <a href={link} target="_blank">
                        <button className="px-10 py-3 rounded-md bg-green-700 text-white">
                            Open project
                        </button>
                    </a>
                </div>
            )}
        </section>
    );
};

export default ProjectHome;
