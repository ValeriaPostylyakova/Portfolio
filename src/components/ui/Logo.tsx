import { FC } from 'react';
import { Link } from 'react-router-dom';

export type LogoProps = {};

export const Logo: FC<LogoProps> = () => {
    return (
        <Link to="/Portfolio/">
            <div className="flex items-center gap-2">
                <img
                    src={'/Portfolio/logo.png'}
                    className="max-w-16"
                    alt="logo"
                />
                <p className="uppercase text-textPrimary font-bold xs:hidden">
                    Valeria Postylyakova
                </p>
            </div>
        </Link>
    );
};
