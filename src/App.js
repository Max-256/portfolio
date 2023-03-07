import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import About from './components/AboutMe';
import JobTankDetails from './components/JobTankDetails';
import BigyesDetails from './components/BigyesDetails';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <main>
      <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/jobTankDetails' element={<JobTankDetails/>} />
      <Route path='/bigyesDetails' element={<BigyesDetails/>} />
      <Route path='/' element={<Home/>} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
