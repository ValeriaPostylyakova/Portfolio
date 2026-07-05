import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface NotFoundButton {
    text: string;
    to?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
}

interface NotFoundProps {
    title?: string;
    description?: string;
    buttons?: NotFoundButton[];
}

const NotFound: FC<NotFoundProps> = ({ title, description, buttons }) => {
    const { t } = useTranslation();

    const displayButtons = buttons ?? [
        {
            text: t('notFound.buttonBack'),
            to: '/',
        },
    ];

    return (
        <div className="w-full h-screen bg-primary relative">
            <div className="flex flex-col w-full h-full items-center justify-center px-4">
                <div className="flex flex-col items-center justify-center mb-8">
                    <h1 className="text-textPrimary text-7xl font-bold uppercase xl:text-6xl md:text-5xl xs:text-4xl">
                        404
                    </h1>
                    <div className="w-14 h-1.5 rounded-md bg-greenSecondary md:w-12 xs:w-10"></div>
                </div>

                <p className="text-3xl font-bold mb-3 xl:text-2xl md:text-xl md:mb-1 xs:text-lg text-textPrimary text-center">
                    {title ?? t('notFound.title')}
                </p>
                <p className="text-grayTertiary mb-12 text-xl xl:text-lg md:text-base md:mb-8 xs:text-sm max-w-[600px] text-center">
                    {description ?? t('notFound.description')}
                </p>

                <div className="flex items-center gap-5 flex-wrap justify-center">
                    {displayButtons.map((btn, index) => {
                        const baseStyles =
                            'py-3 font-bold text-center rounded-md transition xs:py-2 md:text-base';

                        const variantStyles =
                            btn.variant === 'secondary'
                                ? 'px-8 bg-white border text-greenPrimary border-greenSecondary hover:shadow-md xs:px-6'
                                : 'px-12 bg-greenPrimary text-white hover:opacity-90 transition-opacity xl:px-10';

                        const combinedClassName = `${baseStyles} ${variantStyles}`;

                        if (btn.onClick) {
                            return (
                                <button
                                    key={index}
                                    className={combinedClassName}
                                    onClick={btn.onClick}
                                >
                                    {btn.text}
                                </button>
                            );
                        }

                        return (
                            <Link
                                key={index}
                                to={btn.to || '/'}
                                className={combinedClassName}
                            >
                                {btn.text}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default NotFound;
