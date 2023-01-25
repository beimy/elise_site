//Package Imports
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SiteProvider } from './utils/GlobalState';

//Pages and Components
import Nav from './components/Nav/index';
import PaintingsPage from './pages/Paintings';
import DrawingsPage from './pages/Drawings';
import InfoPage from './pages/Info';
import CV from './pages/CV';
import GoogleSheet from './components/GoogleSheetConnection';


function App() {
  
  return (
    <Router>
      <SiteProvider>
        <GoogleSheet />
          <div>
            <Nav />
              <Routes>
                <Route 
                  path='/paintings'
                  element={<PaintingsPage />}
                  />
                  <Route 
                  path='/drawings'
                  element={<DrawingsPage />}
                  />
                  <Route 
                  path='/lowdown'
                  element={<InfoPage />}
                  />
                  <Route 
                  path='/CV'
                  element={<CV />}
                  />
              </Routes>
          </div>
      </SiteProvider>
    </Router>
  );
}

export default App;
