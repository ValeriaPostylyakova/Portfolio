export const SkillBlockSkeleton = () => {
    return (
        <div className="w-full flex flex-col gap-5 animate-pulse">
            <div className="flex items-center gap-5 flex-wrap w-full">
                {[...new Array(22)].map((_, index) => (
                    <div
                        key={index}
                        className="w-[110px] h-[48px] bg-skeletonPrimary rounded-md md:w-[90px] md:h-[40px]"
                    />
                ))}
            </div>
        </div>
    );
};
