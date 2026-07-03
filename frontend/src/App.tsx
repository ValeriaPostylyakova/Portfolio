import { useDevelopmentHistory } from './api/queries/development-history.query.ts';
import { useProjects } from './api/queries/project.query.ts';
import { useSkills } from './api/queries/skills.query.ts';
import Header from './components/shared/header/Header.tsx';
import About from './pages/About.tsx';
import Contacts from './pages/Contacts.tsx';
import Footer from './pages/Footer.tsx';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';

function App() {
    const { data: projects = [] } = useProjects();
    const { data: skills = [] } = useSkills();
    const { data: developmentHistory = [] } = useDevelopmentHistory();

    return (
        <div className="relative min-h-full flex flex-col">
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
        </div>
    );
}

export default App;
