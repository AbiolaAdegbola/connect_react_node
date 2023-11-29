import './App.css';
import Home from "./Screens/Home";
import Services from './Screens/Services';
import Contact from './Screens/Contact';
import { Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className='container mt-4'>
      <nav className='mb-10 flex items-center justify-between'>
        <div>
          <NavLink to="/" className="mr-10 font-extrabold" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Home</NavLink>
          <NavLink to="/services" className="mr-10 font-extrabold" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Services</NavLink>
          <NavLink to="/contact" className="mr-10 font-extrabold" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Contact</NavLink>
        </div>
        <NavLink to="/"><img src="./image/nameFioFood.png" alt="logo du site" width="100" /></NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
