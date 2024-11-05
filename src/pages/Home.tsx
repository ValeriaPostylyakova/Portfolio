import { FC } from 'react';
import { Link } from 'react-scroll';
import { IoIosArrowDown } from 'react-icons/io';

const Home: FC = () => {
    return (
        <section
            id="home"
            className="relative h-screen bg-[url('/background-home.avif')] bg-no-repeat bg-cover flex flex-cpl items-center justify-center"
        >
            <div className="flex flex-col gap-3 items-center">
                <img
                    className="rounded-full w-40 md:w-36 xs:w-32"
                    src={'/Portfolio/avatar.png'}
                    alt="photo"
                />
                <div className="text-center">
                    <p className="font-bold text-2xl uppercase mb-1 md:text-xl xs:text-lg">
                        Hey, I'm Postylyalova Valeria
                    </p>
                    <p className="text-md uppercase font-medium text-gray-700 md:text-base xs:text-sm">
                        Frontend Developer
                    </p>
                </div>

                <Link to={'about'} smooth={true} offset={-95} duration={500}>
                    <IoIosArrowDown className="absolute bottom-7 md:bottom-2 w-8 h-8 cursor-pointer animate-bounce" />
                </Link>
            </div>
        </section>
    );
};

export default Home;
