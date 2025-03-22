import { FC } from 'react';

type ListProps = {
    infoArray: string[] | undefined;
    text: string;
};

const List: FC<ListProps> = ({ infoArray, text }) => {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-xl font-bold md:text-lg xs:text-base">{text}</p>
            <ul className="md:grid md:grid-cols-[repeat(2,_minmax(320px,_1fr))] overflow-auto md:gap-x-10">
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
