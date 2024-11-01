import { FC } from 'react';

export type BlockProps = {
    id?: number;
    data?: string;
    title: string;
    description: string;
    imageUrl?: string[];
};

const HistoryBlock: FC<BlockProps> = ({
    data,
    title,
    description,
    imageUrl,
}) => {
    return (
        <div className="bg-inherit w-10/12 transition rounded-md">
            <div className="flex gap-4">
                <p className="w-10 text-xs uppercase mt-1">{data}</p>
                <div>
                    <h2 className="font-bold text-lime-500 mb-2">{title}</h2>
                    <p className="mb-3">{description}</p>
                    <div className="flex items-center gap-3">
                        {imageUrl?.map((url, index) => (
                            <img
                                key={index}
                                className="w-7"
                                src={url}
                                alt="icon"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryBlock;
