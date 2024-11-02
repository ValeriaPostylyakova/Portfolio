import { Link } from 'react-router-dom';
import { FC } from 'react';

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
        <div className="w-full flex items-center justify-between">
            <img className="w-6/12" src={imageUrl} alt="review photo" />
            <div className="w-5/12">
                <h2 className="text-2xl font-bold mb-3 xl:text-xl">{title}</h2>
                <p className="text-zinc-600 mb-10 text-xl">{description}</p>
                <Link to={`/Portfolio/project/${id}`}>
                    <button
                        onClick={() => onClickFullProject(id)}
                        className="px-16 mb-5 py-3 rounded-md text-white font-bold text-xl text-center bg-green-700 xl:py-2 xl:px-10"
                    >
                        Project review
                    </button>
                </Link>
                <a
                    href={linkGitHub}
                    className="flex items-center gap-3 text-stone-700 transition cursor-pointer hover:text-stone-950 font-medium"
                    target="_blank"
                >
                    Ссылка на GitHub <FaExternalLinkAlt />
                </a>
            </div>
        </div>
    );
};

export default ReviewProject;
