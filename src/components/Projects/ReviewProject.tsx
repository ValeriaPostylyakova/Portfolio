import { Link } from 'react-router-dom';
import { FC } from 'react';
import { Project } from '../../redux/projects/types.ts';

const ReviewProject: FC<Project> = ({ id, title, description, imageUrl }) => {
    return (
        <div className="w-full flex items-center justify-between">
            <img className="w-6/12" src={imageUrl} alt="review photo" />
            <div className="w-5/12">
                <h2 className="text-2xl font-bold mb-3">{title}</h2>
                <p className="text-zinc-600 mb-10 text-xl">{description}</p>
                <Link to={`/Portfolio/project/${id}`}>
                    <button className="px-16 py-3 rounded-md text-white font-bold text-xl text-center bg-green-700">
                        Project review
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ReviewProject;
