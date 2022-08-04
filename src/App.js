
import { Routes, Route } from 'react-router-dom'

import Home from './page/Home';
import Bag from './page/Bag';
import Category from './components/Category';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/bag' element={<Bag />}></Route>
      <Route path='/cate' element={<Category />}></Route>
    </Routes>
  );
}

export default App;
