import { FC } from 'react';

const Footer: FC = () => {
    return (
        <footer className="w-full bg-footer">
            <div className="w-11/12 px-2 m-auto">
                <div className="py-20 w-full flex justify-between border-b border-b-textFooter xs:py-16">
                    <div>
                        <h1 className="uppercase text-textFooter font-bold mb-1 xs:text-sm xxs:w-10">
                            Valeria Postylyakova
                        </h1>
                        <h2 className="text-textFooter">Fullstack Developer</h2>
                    </div>
                    <div>
                        <h1 className="uppercase text-textFooter font-bold mb-3">
                            Social
                        </h1>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://vk.com/your_infinity89"
                                target="_blank"
                            >
                                <img
                                    className="xs:w-6"
                                    src={'/Portfolio/social/vk.png'}
                                    alt="vk"
                                />
                            </a>
                            <a
                                href="https://t.me/valeria_postylyakova"
                                target="_blank"
                            >
                                <img
                                    className="xs:w-6"
                                    src={'/Portfolio/social/telegram.png'}
                                    alt="telegram"
                                />
                            </a>
                            <a
                                href="https://github.com/ValeriaPostylyakova"
                                target="_blank"
                            >
                                <img
                                    className="w-9 xs:w-7"
                                    src={'/Portfolio/social/github.png'}
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
                            Postylyakova Valeria
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
