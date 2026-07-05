export const HistoryBlockSkeleton = () => {
    return (
        <div className="bg-inherit w-10/12 transition rounded-md md:w-full animate-pulse">
            <div className="flex gap-4">
                <div className="w-10 mt-1 flex flex-col gap-1">
                    <div className="h-3 bg-skeletonPrimary rounded w-full"></div>
                    <div className="h-3 bg-skeletonPrimary rounded w-3/4"></div>
                </div>

                <div className="flex-1">
                    <div className="h-5 bg-skeletonPrimary rounded w-1/2 mb-3"></div>

                    <div className="space-y-2 mb-4">
                        <div className="h-4 bg-skeletonPrimary rounded w-full"></div>
                        <div className="h-4 bg-skeletonPrimary rounded w-11/12"></div>
                        <div className="h-4 bg-skeletonPrimary rounded w-4/5"></div>
                    </div>

                    <div className="flex items-center gap-3">
                        {[1, 2, 3, 4, 5].map((id) => (
                            <div
                                key={id}
                                className="w-7 h-7 sm:w-6 sm:h-6 bg-skeletonPrimary rounded-sm"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
