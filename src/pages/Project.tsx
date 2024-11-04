import Footer from './Footer.tsx';
import { useEffect } from 'react';
import { AppDispatch, RootState } from '../redux/store.ts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProject } from '../redux/project/asyncAction.ts';
import ProjectHome from '../components/Project/ProjectHome.tsx';
import ProjectInfo from '../components/Project/ProjectInfo.tsx';

const Project = () => {
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
            <ProjectHome
                title={project?.title}
                description={project?.description}
                link={project?.link}
                status={status}
            />
            <ProjectInfo {...project} />
            <Footer />
        </div>
    );
};

export default Project;
