import { FC, useState } from 'react';

import { Logo } from '../../ui/Logo.tsx';
import { ThemeToggle } from '../ThemeToggle.tsx';
import HeaderListItem from './HeaderListItem.tsx';
import Menu from './Menu.tsx';
import { MenuButton } from './MenuButton.tsx';
import { menuItems } from './MenuItems.ts';
import { LanguageToggle } from '../LanguageToggle.tsx';

const Header: FC = () => {
    const [activeBurgerMenu, setActiveBurgerMenu] = useState(false);

    const onClickButtonBurgerMenu = () => {
        setActiveBurgerMenu(!activeBurgerMenu);
    };

    return (
        <header className="w-full h-20 pt-3 px-14 bg-primary fixed z-30 top-0 md:px-5">
            <nav className="flex items-center justify-between">
                <Logo />
                <ul className="flex items-center gap-12 md:hidden">
                    {menuItems.map((item, index) => (
                        <HeaderListItem
                            key={index}
                            {...item}
                            setActiveBurgerMenu={setActiveBurgerMenu}
                        />
                    ))}
                </ul>
                <div className="flex items-center gap-4 md:gap-6">
                    <LanguageToggle />
                    <ThemeToggle />

                    <MenuButton
                        active={activeBurgerMenu}
                        onClickButtonMenu={onClickButtonBurgerMenu}
                    />
                </div>
            </nav>

            <Menu active={activeBurgerMenu} setActive={setActiveBurgerMenu} />
        </header>
    );
};

export default Header;
