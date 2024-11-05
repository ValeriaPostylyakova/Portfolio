import { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store.ts';

import { menuItems } from './MenuItems.ts';
import { menuActions } from '../../redux/menu/menu.ts';
import HeaderListItem from './HeaderListItem.tsx';

const Menu: FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const active = useSelector((state: RootState) => state.menuReducer.active);

    const onClickMenu = () => {
        dispatch(menuActions.setActive(!active));
    };
    return (
        <div
            className={active ? 'relative w-full h-screen' : ''}
            onClick={onClickMenu}
        >
            <div
                className={
                    active
                        ? 'fixed top-24 left-0 z-30 backdrop-filter backdrop-blur-sm w-3/4 h-screen'
                        : ''
                }
            ></div>
            <div
                className={
                    active
                        ? 'fixed top-24 right-0 z-30 w-2/5 bg-white h-screen transition-opacity block opacity-1 sm:w-full'
                        : 'fixed top-24 right-0 z-30 w-2/5 bg-white h-screen transition-opacity hidden opacity-0 sm:w-full'
                }
            >
                <ul
                    onClick={onClickMenu}
                    className="flex flex-col py-16 items-center justify-center gap-7"
                >
                    {menuItems.map((item, index) => (
                        <HeaderListItem key={index} {...item} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Menu;
