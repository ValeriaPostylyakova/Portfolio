import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store.ts';
import { menuActions } from '../../redux/menu/menu.ts';

import { menuItems } from './MenuItems.ts';
import HeaderListItem from './HeaderListItem.tsx';
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
                    {menuItems.map((item, index) => (
                        <HeaderListItem key={index} {...item} />
                    ))}
                </ul>
                <button
                    onClick={onClickButtonMenu}
                    className="w-8 h-5 hidden md:block"
                >
                    <span
                        className={
                            active
                                ? 'w-8 block h-0.5 bg-black rounded-md mb-1.5 transition translate-x-1 -translate-y-2 rotate-45 origin-top-left'
                                : 'w-8 block h-0.5 bg-black rounded-md mb-1.5 transition'
                        }
                    ></span>
                    <span
                        className={
                            active
                                ? 'w-8 block h-0.5 bg-black rounded-md mb-1.5 transition opacity-0'
                                : 'w-8 block h-0.5 bg-black rounded-md mb-1.5 transition'
                        }
                    ></span>
                    <span
                        className={
                            active
                                ? 'w-8 block h-0.5 bg-black rounded-md mb-1.5 transition -translate-x-1.5 -translate-y-6 -rotate-45 origin-bottom-right'
                                : 'w-8 block h-0.5 bg-black rounded-md mb-1.5 transition'
                        }
                    ></span>
                </button>
            </nav>
            <Menu />
        </header>
    );
};

export default Header;
