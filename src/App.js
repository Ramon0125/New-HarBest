import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePortal from './Pages/HomePortal/HomePortal';
import Protected from './Components/RoutesProtector';
import Login from './Pages/Login/login';
import ReceptsDocs from './Pages/ReceptDocs/ReceptDocsPortal';
import './Components/Styles.css';

function App() {
  return (
     
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login /> } />
        
        <Route path='/HomePortal' element={<Protected />}>
          <Route path='' element={< HomePortal />} />
        </Route>

        <Route path='/ReceptsDocs' element={<Protected />}>
          <Route path='' element={< ReceptsDocs />} />
        </Route>
        

      </Routes>
    </BrowserRouter>

  );
}

export default App;
