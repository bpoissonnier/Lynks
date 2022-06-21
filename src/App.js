import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Metier from './pages/Metier';
import Annonce from './pages/Annonce'
import Recruteur from './pages/Recruteur';
import Poste from './pages/Poste';
import Finance from './pages/Finance';
import Mention from './pages/Mention';
import Cookies from './pages/Cookies';
import Deposer from './pages/Deposer';
import Groupe from './pages/Groupe';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/les-metiers" element={<Metier />} />
        <Route path="/annonce" element={<Annonce />} />
        <Route path="/espace-recruteur" element={<Recruteur />} />
        <Route path="/poste" element={<Poste />} />
        <Route path="/deposer-cv" element={<Deposer />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/mentions-legales" element={<Mention />} />
        <Route path="/politique-de-cookies" element={<Cookies />} />
        <Route path="/groupe" element={<Groupe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;