import './App.scss'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import Footer from './components/pages/Footer'

function App() {

  return (
    <div className='min-h-full flex flex-col'>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
