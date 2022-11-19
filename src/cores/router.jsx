import { Route, Routes } from 'react-router-dom';

import Ending from 'pages/Ending';
import Landing from 'pages/Landing';
import Loading from 'pages/Loading';
import Result from 'pages/ResultOneDay';
import Step1 from 'pages/Step1';
import Step2 from 'pages/Step2';
import Step3 from 'pages/Step3';
import Step4 from 'pages/Step4';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/ending' element={<Ending />} />
      <Route path='/step4' element={<Step4 />} />
      <Route path='/step1' element={<Step1 />} />
      <Route path='/step2' element={<Step2 />} />
      <Route path='/step3' element={<Step3 />} />
      <Route path='/loading' element={<Loading />} />
      <Route path='/resultoneday' element={<Result />} />
    </Routes>
  );
}

export default Router;
