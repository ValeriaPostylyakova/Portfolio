import { FC } from 'react';
import Header from '../components/shared/header/Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contacts from './Contacts';
import Footer from './Footer';
import { useProjects } from '../api/queries/project.query';
import { useSkills } from '../api/queries/skills.query';
import { useDevelopmentHistory } from '../api/queries/development-history.query';

const Main: FC = () => {
    const { data: projects = [] } = useProjects();
    const { data: skills = [] } = useSkills();
    const { data: developmentHistory = [] } = useDevelopmentHistory();
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
