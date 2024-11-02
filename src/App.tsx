import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';
import Contacts from './pages/Contacts.tsx';
import Header from './components/Header/Header.tsx';
import Footer from './pages/Footer.tsx';
import { useEffect } from 'react';
import axios from 'axios';
import { AppDispatch } from './redux/store.ts';
import { useDispatch } from 'react-redux';
import { projectsActions } from './redux/projects/slice.ts';

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
        <div className="relative">
            <Header />
            <main>
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
