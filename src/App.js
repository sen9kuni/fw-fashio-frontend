
import {Routes, Route} from 'react-router-dom'

import Home from './page/Home';
import Checkout from './page/Checkout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/checkout' element={<Checkout />}></Route>
    </Routes>
  );
}

export default App;
