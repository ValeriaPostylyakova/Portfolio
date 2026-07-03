import { FC } from 'react';
import { Link } from 'react-scroll';

type HeaderListItemProps = {
    text: string;
    link: string;
    setActiveBurgerMenu: (value: boolean) => void;
};

const HeaderListItem: FC<HeaderListItemProps> = ({
    text,
    link,
    setActiveBurgerMenu,
}) => {
    return (
        <Link
            className="relative uppercase font-bold text-sm cursor-pointer before:w-full before:h-0.5 before:bg-greenSecondary before:absolute before:left-0 before:-bottom-2 before:transition before:scale-x-0 before:origin-left before:hover:transition before:hover:scale-x-100 text-textPrimary"
            to={link}
            smooth={true}
            offset={-95}
            duration={500}
        >
            <li onClick={() => setActiveBurgerMenu(false)}>{text}</li>
        </Link>
    );
};

export default HeaderListItem;
