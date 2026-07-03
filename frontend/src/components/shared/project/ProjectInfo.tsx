import { FC } from 'react';
import { Link } from 'react-router-dom';

import { IProject } from '../../../@types/project.types.ts';
import Subtitle from '../../ui/Subtitle.tsx';
import List from './List.tsx';

const ProjectInfo: FC<IProject> = ({
    image,
    capabilities,
    features,
    tools,
    projectUrl,
}) => {
    return (
        <section className="bg-secondary w-full">
            <div className="w-7/12 m-auto xl:w-3/4 md:w-11/12">
                <img
                    className="mb-10 w-full"
                    src={image}
                    alt="project images"
                />
                <Subtitle text="Project overview" />
                <div className="flex justify-between mb-20 md:flex-col gap-14">
                    <List
                        infoArray={features}
                        text="This project implements:"
                    />
                    <List
                        infoArray={capabilities}
                        text="This project possibilities:"
                    />
                </div>
                <div>
                    <Subtitle text="Tools used" />
                    <div className="flex items-center gap-5 mb-20 flex-wrap">
                        {tools?.map((tool, index) => (
                            <div
                                key={index}
                                className="rounded-xl bg-grayPrimary text-graySecondary text-center px-5 py-3 font-medium md:text-sm"
                            >
                                {tool.tool}
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <Subtitle text="Preview" />
                    <div className="flex items-center gap-7 pb-20">
                        <a
                            href={projectUrl}
                            target="_blank"
                            className="px-8 py-3 bg-greenPrimary rounded-md text-white font-bold transition hover:shadow-xl xs:py-2 xs:px-8"
                        >
                            Open project
                        </a>
                        <Link to="/">
                            <button className="px-8 py-3 bg-white border rounded-md text-greenPrimary font-bold transition hover:shadow-md xs:py-2 xs:px-8">
                                Go Back
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectInfo;
