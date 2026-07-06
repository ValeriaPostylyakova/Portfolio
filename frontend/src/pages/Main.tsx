import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { useDevelopmentHistory } from '../api/queries/development-history.query';
import { useProjects } from '../api/queries/projects.query';
import { useSkills } from '../api/queries/skills.query';
import Header from '../components/shared/header/Header';
import About from './About';
import Contacts from './Contacts';
import Footer from './Footer';
import Home from './Home';
import Projects from './Projects';

const Main: FC = () => {
    const { data: projects = [] } = useProjects();
    const { data: skills = [] } = useSkills();
    const { data: developmentHistory = [] } = useDevelopmentHistory();

    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollToProjects) {
            scroller.scrollTo('projects', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
                offset: -50,
            });
        }
    }, [location]);
    return (
        <>
            <Header />
            <main className="shrink grow flex-auto">
                <Home />
                <About
                    skills={skills}
                    developmentHistory={developmentHistory}
                />
                <Projects projects={projects} />
                <Contacts />
            </main>
            <Footer />
        </>
    );
};

export default Main;
