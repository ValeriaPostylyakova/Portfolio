import { FC } from 'react';

type ListProps = {
    infoArray: string[] | undefined;
};

const List: FC<ListProps> = ({ infoArray }) => {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-xl font-bold md:text-lg xs:text-base">
                This project implements:
            </p>
            {/*className="md:grid md:grid-cols-2 md:justify-between md:gap-x-10"*/}
            <ul className="md:grid md:grid-cols-[repeat(2,_minmax(270px,_1fr))] overflow-auto md:gap-x-10">
                {infoArray?.map((info) => (
                    <li key={info} className="text-stone-500 mb-1">
                        - {info}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
