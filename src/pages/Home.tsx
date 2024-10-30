import { IoIosArrowDown } from 'react-icons/io';

const Home = () => {
    return (
        <section className="relative h-screen bg-[url('/background-home.avif')] bg-no-repeat bg-cover flex flex-cpl items-center justify-center">
            <div className="flex flex-col gap-3 items-center">
                <img
                    className="rounded-full w-40"
                    src="/avatar.png"
                    alt="photo"
                />
                <div className="text-center">
                    <p className="font-bold text-2xl uppercase mb-1">
                        Hey, I'm Postylyalova Valeria
                    </p>
                    <p className="text-md uppercase font-medium text-gray-700">
                        Frontend Developer
                    </p>
                </div>

                <IoIosArrowDown className="absolute bottom-7 w-8 h-8" />
            </div>
        </section>
    );
};

export default Home;
