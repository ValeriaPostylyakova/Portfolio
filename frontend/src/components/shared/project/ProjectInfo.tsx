import { FC } from 'react';
import { Link } from 'react-router-dom';

import { IProject } from '../../../@types/project.types.ts';
import Subtitle from '../../ui/Subtitle.tsx';
import List from './List.tsx';
import { useTranslation } from 'react-i18next';
import { ImageGallery } from '../../ui/ImageGallery.tsx';
import Title from '../../ui/Title.tsx';
import { SlideImage } from 'yet-another-react-lightbox';

const ProjectInfo: FC<IProject> = ({
    capabilities,
    features,
    tools,
    projectUrl,
    images,
}) => {
    const { t } = useTranslation();

    const galleryImages: SlideImage[] = images.map((image) => {
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
                    <List infoArray={features} text={t('project.features')} />
                    <List
                        infoArray={capabilities}
                        text={t('project.capabilities')}
                    />
                </div>
                <div>
                    <Subtitle text={t('project.tools')} />
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
                    <Subtitle text={t('project.preview')} />
                    <div className="flex items-center gap-7 pb-20">
                        <a
                            href={projectUrl}
                            target="_blank"
                            className="px-8 py-3 bg-greenPrimary rounded-md text-white font-bold transition hover:shadow-xl xs:py-2 xs:px-8"
                        >
                            {t('project.buttonOpenProject')}
                        </a>
                        <Link
                            className="px-8 py-3 bg-white border rounded-md text-greenPrimary font-bold transition hover:shadow-md xs:py-2 xs:px-8"
                            to="/"
                        >
                            {t('project.buttonGoBack')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectInfo;
