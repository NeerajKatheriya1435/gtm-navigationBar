
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Product from './components/Product';
import Team from './components/Team';
import Blog from './components/Blog';
import Career from './components/Career';
import Director from './components/Director';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/product' element={<Product />} />
          <Route path='/team' element={<Team />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/career' element={<Career />} />
          <Route path='/director' element={<Director />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
