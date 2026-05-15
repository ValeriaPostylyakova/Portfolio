import { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { menuActions } from '../../../redux/menu/menu.ts';
import { AppDispatch, RootState } from '../../../redux/store.ts';

import { Logo } from '../../ui/Logo.tsx';
import { ThemeToggle } from '../ThemeToggle.tsx';
import HeaderListItem from './HeaderListItem.tsx';
import Menu from './Menu.tsx';
import { MenuButton } from './MenuButton.tsx';
import { menuItems } from './MenuItems.ts';

const Header: FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const active = useSelector((state: RootState) => state.menuReducer.active);

    const onClickButtonMenu = () => {
        dispatch(menuActions.setActive(!active));
    };

    return (
        <header className="w-full h-20 pt-3 px-14 bg-primary fixed z-30 top-0 md:px-5">
            <nav className="flex items-center justify-between">
                <Logo />
                <ul className="flex items-center gap-12 md:hidden">
                    {menuItems.map((item, index) => (
                        <HeaderListItem key={index} {...item} />
                    ))}
                </ul>
                <div className="flex items-center gap-4 md:gap-6">
                    <ThemeToggle />
                    <MenuButton
                        active={active}
                        onClickButtonMenu={onClickButtonMenu}
                    />
                </div>
            </nav>

            <Menu />
        </header>
    );
};

export default Header;
