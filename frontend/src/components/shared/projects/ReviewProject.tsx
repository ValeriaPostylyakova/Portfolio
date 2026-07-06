import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { IProject } from '../../../@types/project.types.ts';

const ReviewProject: FC<IProject> = ({
    id,
    title,
    description,
    image,
    github_url,
}) => {
    const { t } = useTranslation();

    return (
        <div className="w-full flex items-center justify-between md:flex-col">
            <img className="w-6/12 md:w-full" src={image} alt="review photo" />
            <div className="w-5/12 md:text-center md:w-full">
                <h2 className="text-2xl font-bold mb-3 xl:text-xl md:md-2 xs:text-lg text-textPrimary">
                    {title}
                </h2>
                <p className="text-grayTertiary mb-10 text-xl xl:text-lg md:mb-8 xs:text-base">
                    {description}
                </p>
                <Link
                    to={`/project/${id}`}
                    className="inline-block px-16 mb-5 py-3 rounded-md text-white font-bold text-xl text-center bg-greenPrimary hover:opacity-80 transition-opacity xl:py-2 xl:px-10 md:text-base"
                >
                    {t('projects.reviewButton')}
                </Link>
                <div>
                    <a
                        href={github_url}
                        className="text-grayAccent transition cursor-pointer hover:text-stone-950 font-medium inline-block"
                        target="_blank"
                    >
                        <p className="flex items-center gap-3 xs:text-sm">
                            {t('projects.linkToGitHub')} <FaExternalLinkAlt />
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ReviewProject;
