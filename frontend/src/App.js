import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SlotsProvider } from './context/SlotsContext';
import MyTeamScreen from './pages/MyTeamScreen';
import SelectBetScreen from './pages/SelectBetScreen';

function App() {
  return (
    <SlotsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyTeamScreen />} />
          <Route path="/select-bet" element={<SelectBetScreen />} />
        </Routes>
      </BrowserRouter>
    </SlotsProvider>
  );
}

export default App;
