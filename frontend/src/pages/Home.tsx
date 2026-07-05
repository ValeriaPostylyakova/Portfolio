import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-scroll';

const Home: FC = () => {
    const { t } = useTranslation();

    return (
        <section
            id="home"
            className="relative h-screen bg-home bg-no-repeat bg-cover flex flex-col items-center justify-center"
        >
            <div className="flex flex-col gap-3 items-center">
                <img
                    className="rounded-full w-40 flex-grow-0 flex-shrink-0 md:w-36 xs:w-32"
                    src="/avatar.jpg"
                    alt="avatar"
                />
                <div className="text-center">
                    <p className="font-bold text-2xl uppercase mb-1 md:text-xl xs:text-lg text-textPrimary">
                        {t('welcomeTitle')}
                    </p>
                    <p className="text-md uppercase font-medium text-gray-700 md:text-base xs:text-sm text-textSecondary">
                        {t('welcomeSubtitle')}
                    </p>
                </div>

                <Link to="about" smooth={true} offset={-50} duration={500}>
                    <IoIosArrowDown className="absolute bottom-7 right-[49.3%] md:bottom-2 w-8 h-8 cursor-pointer animate-bounce text-textPrimary" />
                </Link>
            </div>
        </section>
    );
};

export default Home;
