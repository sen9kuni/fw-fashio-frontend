
import { Routes, Route } from 'react-router-dom'

import Home from './page/Home';
import Bag from './page/Bag';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/bag' element={<Bag />}></Route>
    </Routes>
  );
}

export default App;
