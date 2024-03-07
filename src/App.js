import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { NavBar2 } from './components/NavBar2';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Projects2 } from './components/Projects2';
import { ProjectsAll }  from './components/ProjectsAll';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={
            <>
            <NavBar />
              <Banner />
              <Skills />
              <Projects2 />
              <Contact />
            </>
          } />
          <Route path="/projects-all" element={
            <>
            <NavBar2 />
            <ProjectsAll />
            </>
          } />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
