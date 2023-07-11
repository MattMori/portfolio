import './App.css';
import Navbar from './componentes/section/Navbar';
import Presentation from './componentes/section/Presentation';
import Skills from './componentes/section/Skills';
import Projects from './componentes/section/Projects';
import Footer from './componentes/section/Footer';
import RedirectPage from './RedirectPage';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Presentation/>
        <Skills/>
        <Projects/>
        <Footer/>
        <RedirectPage />
    </div>
  );
}

export default App;
