import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sample from 'pages/Sample';
import Step4 from 'pages/Step4';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sample' element={<Sample />} />
        <Route path='/step4' element={<Step4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
