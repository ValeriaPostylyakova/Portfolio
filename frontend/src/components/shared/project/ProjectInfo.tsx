import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { SlideImage } from 'yet-another-react-lightbox';
import { IProject } from '../../../@types/project.types.ts';
import { ImageGallery } from '../../ui/ImageGallery.tsx';
import Subtitle from '../../ui/Subtitle.tsx';
import Title from '../../ui/Title.tsx';
import List from './List.tsx';

interface IProjectInfoProps {
    project?: IProject;
    isLoading: boolean;
    handleBackToProjects: () => void;
}

const ProjectInfo: FC<IProjectInfoProps> = ({
    project,
    isLoading,
    handleBackToProjects,
}) => {
    const { t } = useTranslation();

    if (isLoading) return;

    const galleryImages: SlideImage[] = project!.images.map((image) => {
        return {
            src: image.image,
        };
    });

    return (
        <section className="bg-secondary w-full pt-10">
            <div className="w-7/12 m-auto xl:w-3/4 md:w-11/12">
                <Title title={t('project.overview')} mb={10} />
                <ImageGallery images={galleryImages} />
                <div className="flex justify-between mb-20 md:flex-col gap-14">
                    <List
                        infoArray={project!.features}
                        text={t('project.features')}
                    />
                    <List
                        infoArray={project!.capabilities}
                        text={t('project.capabilities')}
                    />
                </div>
                <div>
                    <Subtitle text={t('project.tools')} />
                    <div className="flex items-center gap-5 mb-20 flex-wrap">
                        {project!.tools?.map((tool, index) => (
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
                    <Subtitle text={t('project.preview')} />
                    <div className="flex items-center gap-7 pb-20">
                        <a
                            href={project?.project_url}
                            target="_blank"
                            className="px-8 py-3 bg-greenPrimary rounded-md text-white font-bold hover:shadow-xl xs:py-2 xs:px-8 cursor-pointer hover:opacity-80 transition-opacity"
                        >
                            {t('project.buttonOpenProject')}
                        </a>
                        <button
                            className="px-8 py-3 bg-white border rounded-md text-greenPrimary font-bold xs:py-2 xs:px-8 hover:opacity-80 transition-opacity"
                            onClick={handleBackToProjects}
                        >
                            {t('project.buttonGoBack')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectInfo;
