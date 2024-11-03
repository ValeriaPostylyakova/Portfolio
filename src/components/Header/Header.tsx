import { Link } from 'react-router-dom';
import HeaderListItem from './HeaderListItem.tsx';
import { FC } from 'react';
import { AppDispatch, RootState } from '../../redux/store.ts';
import { useDispatch, useSelector } from 'react-redux';
import { menuActions } from '../../redux/menu/menu.ts';
import Menu from './Menu.tsx';

const Header: FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const active = useSelector((state: RootState) => state.menuReducer.active);

    const onClickButtonMenu = () => {
        dispatch(menuActions.setActive(!active));
    };

    return (
        <header className="w-full h-24 pt-4 px-14 bg-white fixed z-30 top-0 md:px-5">
            <nav className="flex items-center justify-between">
                <Link to="/Portfolio/">
                    <div className="flex items-center gap-2">
                        <img
                            src={'/Portfolio/logo.jpg'}
                            className="max-w-16"
                            alt="logo"
                        />
                        <p className="uppercase font-bold xs:hidden">
                            Valeria Postylyakova
                        </p>
                    </div>
                </Link>
                <ul className="flex items-center gap-12 md:hidden">
                    <HeaderListItem text="Home" link={'/Portfolio/#home'} />
                    <HeaderListItem text="About" link={'/Portfolio/#about'} />
                    <HeaderListItem
                        text="Projects"
                        link={'/Portfolio/#projects'}
                    />
                    <HeaderListItem
                        text="Contacts"
                        link={'/Portfolio/#contacts'}
                    />
                </ul>
                <button
                    onClick={onClickButtonMenu}
                    className="w-10 h-8 hidden md:block"
                >
                    <span className="w-9 block h-1 bg-black rounded-md mb-1.5"></span>
                    <span className="w-9 block h-1 bg-black rounded-md mb-1.5"></span>
                    <span className="w-9 block h-1 bg-black rounded-md mb-1.5"></span>
                </button>
            </nav>
            <Menu />
        </header>
    );
};

export default Header;
