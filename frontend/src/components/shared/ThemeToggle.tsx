import { useEffect, useState, type FC } from 'react';
import { IoMoonOutline } from 'react-icons/io5';
import { WiDaySunny } from 'react-icons/wi';

export const ThemeToggle: FC = () => {
    const [theme, setTheme] = useState<string>(
        localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <button className="text-textPrimary" onClick={toggleTheme}>
            {theme === 'light' ? (
                <WiDaySunny className="w-[30px] h-[30px] md:w-[38px] md:h-[38px]" />
            ) : (
                <IoMoonOutline className="w-[23px] h-[23px] md:w-[28px] md:h-[28px]" />
            )}
        </button>
    );
};
