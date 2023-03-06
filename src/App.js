import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import About from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetails from './components/ProjectDetails';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <main>
      <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/projectDetails' element={<ProjectDetails/>} />
      <Route path='/notFound' element={<NotFound/>} />
      <Route path='/' element={<Home/>} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
