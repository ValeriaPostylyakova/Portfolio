import Subtitle from './Subtitle.tsx';
import List from './List.tsx';
import { FC } from 'react';
import { FetchProject } from '../../redux/project/types.ts';
import { Link } from 'react-router-dom';

const ProjectInfo: FC<FetchProject> = ({
    imageUrl,
    relizes,
    possibilities,
    tools,
    link,
}) => {
    return (
        <section className="bg-stone-50 w-full">
            <div className="w-7/12 m-auto">
                <img className="mb-10" src={imageUrl} alt="project images" />
                <Subtitle text="Project overview" />
                <div className="flex justify-between mb-20">
                    <List infoArray={relizes} />
                    <List infoArray={possibilities} />
                </div>
                <div>
                    <Subtitle text="Tools used" />
                    <div className="flex items-center gap-5 mb-20 flex-wrap">
                        {tools?.map((tool, index) => (
                            <div
                                key={index}
                                className="rounded-xl bg-stone-200 text-center px-5 py-3 text-stone-500 font-medium"
                            >
                                {tool}
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <Subtitle text="Preview" />
                    <div className="flex items-center gap-7 pb-20">
                        <a href={link} target="_blank">
                            <button className="px-8 py-3 bg-green-700 rounded-md text-white font-bold transition hover:shadow-xl">
                                Open project
                            </button>
                        </a>
                        <Link to="/Portfolio/">
                            <button className="px-8 py-3 bg-white border rounded-md text-green-700 font-bold transition hover:shadow-md">
                                Go Back
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectInfo;
