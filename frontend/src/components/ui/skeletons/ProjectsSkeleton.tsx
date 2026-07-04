export const ProjectsSkeleton = () => {
    return (
        <div className="w-full flex items-center justify-between md:flex-col animate-pulse">
            <div className="w-6/12 md:w-full bg-skeletonPrimary rounded-md aspect-[4/2] md:aspect-video" />
            <div className="w-5/12 md:text-center md:w-full flex flex-col md:items-center mt-5 md:mt-0">
                <div className="h-8 bg-skeletonPrimary rounded-md w-3/4 mb-3 xl:h-7 xs:h-6" />

                <div className="w-full mb-10 md:mb-8 flex flex-col gap-2 md:items-center">
                    <div className="h-5 bg-skeletonPrimary rounded-md w-full xl:h-4.5 xs:h-4" />
                    <div className="h-5 bg-skeletonPrimary rounded-md w-5/6 xl:h-4.5 xs:h-4" />
                </div>

                <div className="w-[208px] h-[52px] mb-5 bg-skeletonPrimary rounded-md xl:w-[160px] xl:h-[40px] md:h-[40px]" />

                <div className="h-5 bg-skeletonPrimary rounded-md w-1/3 xs:h-4" />
            </div>
        </div>
    );
};
