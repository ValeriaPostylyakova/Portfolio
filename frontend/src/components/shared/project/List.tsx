import { FC } from 'react';
import { IFeatureAndCapability } from '../../../@types/project.types';

type ListProps = {
    infoArray: IFeatureAndCapability[];
    text: string;
};

const List: FC<ListProps> = ({ infoArray, text }) => {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-xl font-bold md:text-lg xs:text-base text-textPrimary">
                {text}
            </p>
            <ul className="overflow-auto">
                {infoArray?.map((info) => (
                    <li key={info.id} className="text-graySecondary mb-1">
                        - {info.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
