import React, { FC, useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface ImageGalleryProps {
    images: SlideImage[];
}

export const ImageGallery: FC<ImageGalleryProps> = ({ images }) => {
    const [index, setIndex] = useState(-1);

    return (
        <div className="w-full mb-10">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                slidesPerView={1}
                pagination={{ clickable: true }}
                style={
                    {
                        '--swiper-pagination-color': 'var(--green-primary)',
                        '--swiper-pagination-bullet-inactive-color':
                            'var(--gray-tertiary)',
                    } as React.CSSProperties
                }
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i}>
                        <img
                            src={img.src}
                            alt="slider-image"
                            onClick={() => setIndex(i)}
                            className="w-full h-[400px] object-cover cursor-pointer rounded-md xl:h-[300px] md:h-[250px] xs:h-[200px]"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Lightbox
                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={images}
            />
        </div>
    );
};
