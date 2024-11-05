import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store.ts';
import { projectActions } from '../../redux/project/slice.ts';
import { Project } from '../../redux/projects/types.ts';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ReviewProject: FC<Project> = ({
    id,
    title,
    description,
    imageUrl,
    linkGitHub,
}) => {
    const dispatch: AppDispatch = useDispatch();

    const onClickFullProject = (id: number) => {
        dispatch(projectActions.setProjectId(id));
    };

    return (
        <div className="w-full flex items-center justify-between md:flex-col">
            <img
                className="w-6/12 md:w-full"
                src={imageUrl}
                alt="review photo"
            />
            <div className="w-5/12 md:text-center md:w-full">
                <h2 className="text-2xl font-bold mb-3 xl:text-xl md:md-2 xs:text-lg">
                    {title}
                </h2>
                <p className="text-zinc-600 mb-10 text-xl xl:text-lg md:mb-8 xs:text-base">
                    {description}
                </p>
                <Link to={`/Portfolio/project/${id}`}>
                    <button
                        onClick={() => onClickFullProject(id)}
                        className="px-16 mb-5 py-3 rounded-md text-white font-bold text-xl text-center bg-green-700 xl:py-2 xl:px-10 md:text-base"
                    >
                        Project review
                    </button>
                </Link>
                <div>
                    <a
                        href={linkGitHub}
                        className="text-stone-700 transition cursor-pointer hover:text-stone-950 font-medium inline-block"
                        target="_blank"
                    >
                        <p className="flex items-center gap-3 xs:text-sm">
                            Link to GitHub <FaExternalLinkAlt />
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ReviewProject;
