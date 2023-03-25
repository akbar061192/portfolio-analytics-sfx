import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='whatWeDo' element={<WhatWeDo />} />
    </Routes>
  );
};

export default App;
