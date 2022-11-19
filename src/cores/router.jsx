import { Route, Routes } from 'react-router-dom';

import Landing from 'pages/Landing';
import Ending from 'pages/Ending';
import Result from 'pages/ResultOneDay';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/ending' element={<Ending />} />
      <Route path='/resultoneday' element={<Result />} />
    </Routes>
  );
}

export default Router;
