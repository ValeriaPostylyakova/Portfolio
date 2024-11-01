import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="w-full h-24 pt-4 px-14 bg-white fixed z-50 top-0 md:px-5">
            <nav className="flex items-center justify-between">
                <Link to="/Portfolio/">
                    <div className="flex items-center gap-2">
                        <img
                            src={'/Portfolio/logo.jpg'}
                            className="max-w-16"
                            alt="logo"
                        />
                        <p className="uppercase font-bold">
                            Valeria Postylyakova
                        </p>
                    </div>
                </Link>
                <ul className="flex items-center gap-12 md:hidden">
                    <a
                        className="uppercase font-bold text-sm cursor-pointer"
                        href="/Portfolio/#home"
                    >
                        <li>Home</li>
                    </a>
                    <a href="/Portfolio/#about">
                        <li className="uppercase font-bold text-sm cursor-pointer">
                            About
                        </li>
                    </a>

                    <a href="/Portfolio/#projects">
                        <li className="uppercase font-bold text-sm cursor-pointer">
                            Projects
                        </li>
                    </a>
                    <a href="/Portfolio/#contacts">
                        <li className="uppercase font-bold text-sm cursor-pointer">
                            Contacts
                        </li>
                    </a>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
