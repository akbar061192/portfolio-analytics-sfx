import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';
import EquityPortfolio from './pages/EquityPortfolio/EquityPortfolio';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='whatWeDo' element={<WhatWeDo />} />
      <Route path='equityPortfolio' element={<EquityPortfolio />} />
    </Routes>
  );
};

export default App;
