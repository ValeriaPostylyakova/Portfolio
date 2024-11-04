import { FC } from 'react';
import { Link } from 'react-scroll';
import { AppDispatch } from '../../redux/store.ts';
import { useDispatch } from 'react-redux';
import { menuActions } from '../../redux/menu/menu.ts';

type HeaderListItemProps = {
    text: string;
    link: string;
    containerId: string;
};

const HeaderListItem: FC<HeaderListItemProps> = ({ text, link }) => {
    const dispatch: AppDispatch = useDispatch();

    return (
        <Link
            className="relative uppercase font-bold text-sm cursor-pointer before:w-full before:h-0.5 before:bg-green-700 before:absolute before:left-0 before:-bottom-2 before:transition before:scale-x-0 before:origin-left before:hover:transition before:hover:scale-x-100"
            to={link}
            smooth={true}
            offset={-95}
            duration={500}
        >
            <li onClick={() => dispatch(menuActions.setActive(false))}>
                {text}
            </li>
        </Link>
    );
};

export default HeaderListItem;
