import { Route, Routes } from 'react-router-dom';

import Landing from 'pages/Landing';
import Ending from 'pages/Ending';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/ending' element={<Ending />} />
    </Routes>
  );
}

export default Router;
