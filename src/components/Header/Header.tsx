import { Link } from 'react-router-dom';
import HeaderListItem from './HeaderListItem.tsx';

const Header = () => {
    return (
        <header className="w-full h-24 pt-4 px-14 bg-white fixed z-30 top-0 md:px-5">
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
                    <HeaderListItem text="Home" link={'/Portfolio/#home'} />
                    <HeaderListItem text="About" link={'/Portfolio/#about'} />
                    <HeaderListItem
                        text="Projects"
                        link={'/Portfolio/#projects'}
                    />
                    <HeaderListItem
                        text="Contacts"
                        link={'/Portfolio/#contacts'}
                    />
                </ul>
            </nav>
        </header>
    );
};

export default Header;
