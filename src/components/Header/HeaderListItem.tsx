import { FC } from 'react';

type HeaderListItemProps = {
    text: string;
    link: string;
};

const HeaderListItem: FC<HeaderListItemProps> = ({ text, link }) => {
    return (
        <a
            className="relative uppercase font-bold text-sm cursor-pointer before:w-full before:h-0.5 before:bg-green-700 before:absolute before:left-0 before:-bottom-2 before:transition before:scale-x-0 before:origin-left before:hover:transition before:hover:scale-x-100"
            href={link}
        >
            <li>{text}</li>
        </a>
    );
};

export default HeaderListItem;
