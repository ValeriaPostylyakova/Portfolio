import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/shared/header/Header.tsx';
import About from './pages/About.tsx';
import Contacts from './pages/Contacts.tsx';
import Footer from './pages/Footer.tsx';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';
import { projectsActions } from './redux/projects/slice.ts';
import { AppDispatch } from './redux/store.ts';

function App() {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        async function projectsData() {
            const { data } = await axios.get(
                'https://aebf21a594b24741.mokky.dev/projects'
            );

            dispatch(projectsActions.setProjects(data));
        }
        projectsData();
    }, [dispatch]);

    return (
        <div className="relative min-h-full flex flex-col">
            <Header />
            <main className="shrink grow flex-auto">
                <Home />
                <About />
                <Projects />
                <Contacts />
            </main>
            <Footer />
        </div>
    );
}

export default App;
