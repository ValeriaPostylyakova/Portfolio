import { FC } from 'react';
import { BlockProps } from '../About/HistoryBlock.tsx';

const ReviewProject: FC<BlockProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="w-full flex items-center justify-between">
            <img className="w-6/12" src={imageUrl} alt="review photo" />
            <div className="w-5/12">
                <h2 className="text-2xl font-bold mb-3">{title}</h2>
                <p className="text-zinc-600 mb-10 text-xl">{description}</p>
                <button className="px-16 py-3 rounded-md text-white font-bold text-xl text-center bg-green-700">
                    Project review
                </button>
            </div>
        </div>
    );
};

export default ReviewProject;
