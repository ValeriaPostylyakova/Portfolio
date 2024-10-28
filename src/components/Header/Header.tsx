const Header = () => {
    return (
        <header className="w-full h-24 pt-4 px-14 bg-white fixed z-50 top-0">
            <nav className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src="/logo.jpg" className="max-w-16" alt="logo" />
                    <p className="uppercase font-bold">Valeria Postylyakova</p>
                </div>
                <ul className="flex items-center gap-12">
                    <li className="uppercase font-bold text-sm cursor-pointer">
                        Home
                    </li>
                    <li className="uppercase font-bold text-sm cursor-pointer">
                        About
                    </li>
                    <li className="uppercase font-bold text-sm cursor-pointer">
                        Projects
                    </li>
                    <li className="uppercase font-bold text-sm cursor-pointer">
                        Contacts
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
