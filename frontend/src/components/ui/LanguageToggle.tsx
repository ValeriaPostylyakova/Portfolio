import { useTranslation } from 'react-i18next';

export const LanguageToggle = () => {
    const { i18n } = useTranslation();

    const currentLanguage = i18n.language.toUpperCase();

    const onClickButtonLanguage = () => {
        const nextLanguage = i18n.language.startsWith('ru') ? 'en' : 'ru';
        i18n.changeLanguage(nextLanguage);
        localStorage.setItem('language', nextLanguage);
    };

    return (
        <button
            className="text-textPrimary uppercase font-bold"
            onClick={onClickButtonLanguage}
        >
            {currentLanguage}
        </button>
    );
};
