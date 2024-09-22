import React from 'react';
import { Routes, Route,Router } from 'react-router-dom';
import Home from './components/mainpage';
import Oskargenyavlk from './components/oskargenyavlk';
import Groshovezabez from './components/groshovezabez';
import Zvilnenyasviskovoi from './components/zvilnenyasviskovoi';
import Statusubd from './components/statusubd';
import Vidstrochka from './components/vidstrochka';
import Navbar from './components/navbar';


function App() {
  return (
    <div>
      <Navbar />
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/oskargenyavlk" element={<Oskargenyavlk />} />
      <Route path="/groshovezabez" element={<Groshovezabez />} />
      <Route path="/vidstrochka" element={<Vidstrochka />} />
      <Route path="/zvilnenyasviskovoi" element={<Zvilnenyasviskovoi />} />
      <Route path="/statusubd" element={<Statusubd />} />
    </Routes>
    </div>  );
}

export default App;