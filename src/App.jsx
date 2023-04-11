import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';
import EquityPortfolio from './pages/EquityPortfolio/EquityPortfolio';
import Transactions from './pages/EquityPortfolio/Transactions';
import What from './pages/WhatWeDo/What';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='whatWeDeo' element={<WhatWeDo />} />
      <Route path='whatWeDo' element={<What />} />
      <Route path='equityPortfolio' element={<EquityPortfolio />} />
      <Route path='equityTrans' element={<Transactions />} />
    </Routes>
  );
};

export default App;
