import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Footer: FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="w-full bg-footer">
            <div className="w-11/12 px-2 m-auto">
                <div className="py-20 w-full flex justify-between border-b border-b-textFooter xs:py-16">
                    <div>
                        <h1 className="uppercase text-textFooter font-bold mb-1 xs:text-sm xxs:w-10">
                            {t('logo.name')}
                        </h1>
                        <h2 className="text-textFooter">Fullstack Developer</h2>
                    </div>
                    <div>
                        <h1 className="uppercase text-textFooter font-bold mb-3">
                            {t('footer.social')}
                        </h1>
                        <div className="flex items-center gap-3">
                            <a href="https://vk.com/postylyavs" target="_blank">
                                <img
                                    className="xs:w-6"
                                    src="/social/vk.png"
                                    alt="vk"
                                />
                            </a>
                            <a
                                href="https://t.me/valeria_postylyakova"
                                target="_blank"
                            >
                                <img
                                    className="xs:w-6"
                                    src="/social/telegram.png"
                                    alt="telegram"
                                />
                            </a>
                            <a
                                href="https://github.com/ValeriaPostylyakova"
                                target="_blank"
                            >
                                <img
                                    className="w-9 xs:w-7"
                                    src="/social/github.png"
                                    alt="github"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="py-7 grid place-items-center">
                    <p className="text-textFooter text-xs">
                        © Copyright 2026. Made by
                        <a
                            href="/#home"
                            className="ml-1 text-textFooter text-xs border-b border-b-textFooter cursor-pointer"
                        >
                            {t('logo.name')}
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
