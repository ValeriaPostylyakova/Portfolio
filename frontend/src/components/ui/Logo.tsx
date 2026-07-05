import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export type LogoProps = {};

export const Logo: FC<LogoProps> = () => {
    const { t } = useTranslation();
    return (
        <Link to="/">
            <div className="flex items-center gap-2">
                <img src="/logo.png" className="max-w-16" alt="logo" />
                <p className="uppercase text-textPrimary font-bold xs:hidden">
                    {t('logo.name')}
                </p>
            </div>
        </Link>
    );
};
