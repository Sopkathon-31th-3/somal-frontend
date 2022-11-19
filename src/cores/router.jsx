import { Route, Routes } from 'react-router-dom';

import Ending from 'pages/Ending';
import Landing from 'pages/Landing';
import Step4 from 'pages/Step4';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/ending' element={<Ending />} />
      <Route path='/step4' element={<Step4 />} />
    </Routes>
  );
}

export default Router;
