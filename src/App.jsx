import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';
import EquityPortfolio from './pages/EquityPortfolio/EquityPortfolio';
import What from './pages/WhatWeDo/What';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='whatWeDeo' element={<WhatWeDo />} />
      <Route path='whatWeDo/:id' element={<What />} />
      <Route path='equityPortfolio/:id' element={<EquityPortfolio />} />
    </Routes>
  );
};

export default App;
