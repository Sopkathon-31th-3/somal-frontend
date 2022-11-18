import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sample from '../pages/Sample';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sample' element={<Sample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
