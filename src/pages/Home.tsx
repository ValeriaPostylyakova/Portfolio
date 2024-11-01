import { IoIosArrowDown } from 'react-icons/io';
import ScrollableAnchor from 'react-scrollable-anchor';

const Home = () => {
    return (
        <ScrollableAnchor id={'home'}>
            <section className="relative h-screen bg-[url('/background-home.avif')] bg-no-repeat bg-cover flex flex-cpl items-center justify-center">
                <div className="flex flex-col gap-3 items-center">
                    <img
                        className="rounded-full w-40"
                        src={'/Portfolio/avatar.png'}
                        alt="photo"
                    />
                    <div className="text-center">
                        <p className="font-bold text-2xl uppercase mb-1 md:text-xl">
                            Hey, I'm Postylyalova Valeria
                        </p>
                        <p className="text-md uppercase font-medium text-gray-700 md-text-xs">
                            Frontend Developer
                        </p>
                    </div>

                    <a href="/Portfolio/#about">
                        <IoIosArrowDown className="absolute bottom-7 md:bottom-2 w-8 h-8 cursor-pointer animate-bounce" />
                    </a>
                </div>
            </section>
        </ScrollableAnchor>
    );
};

export default Home;
