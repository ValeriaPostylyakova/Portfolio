import { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store.ts';
import { fetchProject } from '../redux/project/asyncAction.ts';

import ProjectHome from '../components/Project/ProjectHome.tsx';
import ProjectInfo from '../components/Project/ProjectInfo.tsx';
import Footer from './Footer.tsx';

const Project: FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { projectId, project, status } = useSelector(
        (state: RootState) => state.projectReducer
    );

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(fetchProject(projectId));
    }, [dispatch, projectId]);

    return (
        <div>
            <ProjectHome {...project} status={status} />
            <ProjectInfo {...project} />
            <Footer />
        </div>
    );
};

export default Project;
