import { FC } from 'react';

interface Props {
    onClickButtonMenu: () => void;
    active: boolean;
}

export const MenuButton: FC<Props> = ({ onClickButtonMenu, active }) => {
    const burgerMenuItemStyles =
        'w-8 block h-0.5 bg-textPrimary rounded-md mb-1.5 transition';

    return (
        <button onClick={onClickButtonMenu} className="w-8 h-5 hidden md:block">
            <span
                className={
                    active
                        ? `${burgerMenuItemStyles} translate-x-1 -translate-y-2 rotate-45 origin-top-left`
                        : burgerMenuItemStyles
                }
            ></span>
            <span
                className={
                    active
                        ? `${burgerMenuItemStyles} opacity-0`
                        : burgerMenuItemStyles
                }
            ></span>
            <span
                className={
                    active
                        ? `${burgerMenuItemStyles} -translate-x-1.5 -translate-y-6 -rotate-45 origin-bottom-right`
                        : burgerMenuItemStyles
                }
            ></span>
        </button>
    );
};
