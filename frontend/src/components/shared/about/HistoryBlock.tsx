import { FC } from 'react';
import { IDevelopmentHistoryIcons } from '../../../@types/development-history.types';

export type BlockProps = {
    title: string;
    description: string;
    date: string;
    icons: IDevelopmentHistoryIcons[];
};

const HistoryBlock: FC<BlockProps> = ({ title, description, date, icons }) => {
    return (
        <div className="bg-inherit w-10/12 transition rounded-md md:w-full">
            <div className="flex gap-4">
                <p className="w-10 text-xs uppercase mt-1 text-textPrimary">
                    {date}
                </p>
                <div>
                    <h2 className="font-bold text-textTertiary mb-2">
                        {title}
                    </h2>
                    <p className="mb-3 md:text-sm text-textPrimary">
                        {description}
                    </p>
                    <div className="flex items-center gap-3">
                        {icons.map((icon) => (
                            <img
                                key={icon.id}
                                className="w-7 sm:w-6"
                                src={icon.image}
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
