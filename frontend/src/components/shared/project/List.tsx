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
            <ul className="md:grid md:grid-cols-[repeat(2,_minmax(320px,_1fr))] overflow-auto md:gap-x-10 ">
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
