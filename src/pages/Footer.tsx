import { FaGithub } from 'react-icons/fa';
import { SiVk } from 'react-icons/si';
import { FaTelegram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full bg-black">
            <div className="w-11/12 px-2 m-auto">
                <div className="py-20 w-full flex justify-between border-b border-b-white">
                    <div>
                        <h1 className="uppercase text-white font-bold mb-1">
                            Valeria Postylyakova
                        </h1>
                        <h2 className="text-white">Frontend Developer</h2>
                    </div>
                    <div>
                        <h1 className="uppercase text-white font-bold mb-3">
                            Social
                        </h1>
                        <div className="flex items-center gap-3">
                            <SiVk className="text-blue-600 w-8 h-8" />
                            <FaTelegram className="text-blue-300 w-8 h-8" />
                            <FaGithub className="text-white w-8 h-8" />
                        </div>
                    </div>
                </div>
                <div className="py-5 grid place-items-center">
                    <p className="text-white text-xs">
                        © Copyright 2024. Made by
                        <a className="ml-1 text-white text-xs border-b border-b-white cursor-pointer">
                            Postylyakova Valeria
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
