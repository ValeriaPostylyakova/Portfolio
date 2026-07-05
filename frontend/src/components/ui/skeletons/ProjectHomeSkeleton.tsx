export const ProjectHomeSkeleton = () => {
    return (
        <div className="w-[283px] h-[176px] flex flex-col justify-between items-center animate-pulse">
            <div className="w-[220px] h-[36px] bg-skeletonPrimary rounded-[6px]" />
            <div className="w-full h-[28px] bg-skeletonPrimary rounded-[6px]" />
            <div className="w-[220px] h-[48px] bg-skeletonPrimary rounded-[7px]" />
        </div>
    );
};
