import { FC } from 'react';
import './Menu.scss';
import HeaderListItem from './HeaderListItem.tsx';
import { menuItems } from './MenuItems.ts';
import { AppDispatch, RootState } from '../../redux/store.ts';
import { useDispatch, useSelector } from 'react-redux';
import { menuActions } from '../../redux/menu/menu.ts';

const Menu: FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const active = useSelector((state: RootState) => state.menuReducer.active);

    const onClickMenu = () => {
        dispatch(menuActions.setActive(!active));
    };
    return (
        <div className="relative w-full" onClick={onClickMenu}>
            <div className={active ? 'blurrr' : ''}></div>
            <div
                className={
                    active
                        ? 'fixed top-24 right-0 z-30 w-2/5 bg-white h-screen transition-opacity block opacity-1 sm:w-full'
                        : 'fixed top-24 right-0 z-30 w-2/5 bg-white h-screen transition-opacity hidden opacity-0 sm:w-full'
                }
            >
                <ul className="flex flex-col py-16 items-center justify-center gap-7">
                    {menuItems.map((item, index) => (
                        <HeaderListItem key={index} {...item} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Menu;
