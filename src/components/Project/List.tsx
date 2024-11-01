import { FC } from 'react';

type ListProps = {
    infoArray: string[] | undefined;
};

const List: FC<ListProps> = ({ infoArray }) => {
    return (
        <ul className="flex flex-col gap-4">
            <p className="text-xl font-bold">This project implements:</p>
            {infoArray?.map((info) => (
                <li key={info} className="text-stone-500">
                    - {info}
                </li>
            ))}
        </ul>
    );
};

export default List;
