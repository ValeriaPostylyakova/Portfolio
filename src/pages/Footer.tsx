import { FC } from 'react';

const Footer: FC = () => {
    return (
        <footer className="w-full bg-black">
            <div className="w-11/12 px-2 m-auto">
                <div className="py-20 w-full flex justify-between border-b border-b-white xs:py-16">
                    <div>
                        <h1 className="uppercase text-white font-bold mb-1 xs:text-sm xxs:w-10">
                            Valeria Postylyakova
                        </h1>
                        <h2 className="text-white">Frontend Developer</h2>
                    </div>
                    <div>
                        <h1 className="uppercase text-white font-bold mb-3">
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
                    <p className="text-white text-xs">
                        © Copyright 2025. Made by
                        <a
                            href="/#home"
                            className="ml-1 text-white text-xs border-b border-b-white cursor-pointer"
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
