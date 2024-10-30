import Header from '../components/Header/Header.tsx';
import Footer from './Footer.tsx';
import { useEffect } from 'react';

const Project = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <section className="h-screen grid place-items-center bg-[url('/Portfolio/background-home.avif')] bg-cover bg-no-repeat">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4 uppercase">
                        React Sneakers
                    </h1>
                    <p className="text-xl mb-12">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Totam, cum.Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Totam, cum.
                    </p>
                    <button className="px-10 py-3 rounded-md bg-green-700 text-white">
                        Open project
                    </button>
                </div>
            </section>
            <section className="bg-stone-50 w-full">
                <div className="w-7/12 m-auto">
                    <img
                        className="mb-10"
                        src="/Portfolio/react-sneakers.png"
                        alt="project images"
                    />
                    <h2 className="font-bold text-2xl mb-8">
                        Project overview
                    </h2>
                    <div className="flex justify-between mb-20">
                        <ul className="flex flex-col gap-4">
                            <p className="text-xl font-bold">
                                This project implements:
                            </p>
                            <li className="text-stone-500">
                                - Adaptive layout
                            </li>
                            <li className="text-stone-500">
                                - Registration form
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-4">
                            <p className="text-xl font-bold">
                                This project implements:
                            </p>
                            <li className="text-stone-500">
                                - Adaptive layout
                            </li>
                            <li className="text-stone-500">
                                - Registration form
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl mb-8">Tools used</h2>
                        <div className="flex items-center gap-5 mb-20">
                            <div className="rounded-xl bg-stone-200 text-center px-5 py-3 text-stone-500 font-medium">
                                HTML
                            </div>
                            <div className="rounded-xl bg-stone-200 text-center px-5 py-3 text-stone-500 font-medium">
                                HTML
                            </div>
                            <div className="rounded-xl bg-stone-200 text-center px-5 py-3 text-stone-500 font-medium">
                                HTML
                            </div>
                            <div className="rounded-xl bg-stone-200 text-center px-5 py-3 text-stone-500 font-medium">
                                HTML
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl mb-8">Preview</h2>
                        <div className="flex items-center gap-7 pb-20">
                            <button className="px-8 py-3 bg-green-700 rounded-md text-white font-bold transition hover:shadow-xl">
                                Open project
                            </button>
                            <button className="px-8 py-3 bg-white border rounded-md text-green-700 font-bold transition hover:shadow-md">
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Project;
