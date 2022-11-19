import { Route, Routes } from 'react-router-dom';
import Step1 from 'pages/Step1';
import Step2 from 'pages/Step2';
import Step3 from 'pages/Step3';
import Landing from 'pages/Landing';
import Ending from 'pages/Ending';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/ending' element={<Ending />} />
      <Route path='/step1' element={<Step1 />} />
      <Route path='/step2' element={<Step2 />} />
      <Route path='/step3' element={<Step3 />} />
    </Routes>
  );
}

export default Router;
