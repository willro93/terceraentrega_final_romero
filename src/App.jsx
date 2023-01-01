import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Nosotros from './components/Nosotros/Nosotros';
import Preguntas from './components/Preguntas/Preguntas';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
   <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path = "/" element={<Home />} />
        <Route exact path = "/home" element={<Home />} />
        <Route exact path = "/home/nosotros" element={<Nosotros />} />
        <Route path='/home/productos' element={<ItemListContainer />} />
        <Route exact path = "/home/preguntas" element={<Preguntas />} />
      </Routes>
   <Footer />
  </BrowserRouter>
  );
}

export default App;
