import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';
import Contacts from './pages/Contacts.tsx';
import Header from './components/Header/Header.tsx';
import Footer from './pages/Footer.tsx';

function App() {
    return (
        <div className="wrapper">
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
