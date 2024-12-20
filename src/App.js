import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePortal from './Pages/HomePortal/HomePortal';
import ProtectedPage from './Components/RoutesProtector';
import Login from './Pages/Login/login';
import ReceptsDocs from './Pages/ReceptDocs/ReceptDocsPortal';
import './Components/Styles.css';
import { CasosFiscales } from './Pages/CasosFiscales/CasosFiscales';

function App() {
  return (
     
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login /> } />
        
        <Route path='/HomePortal' element={<ProtectedPage />}>
          <Route path='' element={< HomePortal />} />
        </Route>

        <Route path='/ReceptsDocs' element={<ProtectedPage />}>
          <Route path='' element={< ReceptsDocs />} />
        </Route>
        
        <Route path='/CasosFiscales' element={<ProtectedPage />}>
          <Route path='' element={< CasosFiscales />} />
        </Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
