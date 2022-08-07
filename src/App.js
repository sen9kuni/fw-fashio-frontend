
import { Routes, Route } from 'react-router-dom'

import Home from './page/Home';
import Bag from './page/Bag';
import Category from './components/Category';
import Checkout from './page/Checkout';
import Dashboard from './page/Dashboard';
import SellingProducts from './page/SellingProducts'
import OrderCustommer from './page/OrderCustommer'
import OrderSeller from './page/OrderSeller'
import ProductSeller from './page/ProductSeller'
import ProfileSeller from './page/ProfileSeller'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/bag' element={<Bag />}></Route>
      <Route path='/cate' element={<Category />}></Route>
      <Route path='/checkout' element={<Checkout />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='/dashboard/seller/addproduct' element={<SellingProducts />}></Route>
      <Route path='/dashboard/seller/products' element={<ProductSeller />}></Route>
      <Route path='/dashboard/seller/order' element={<OrderSeller />}></Route>
      <Route path='/dashboard/seller/profile' element={<ProfileSeller />}></Route>
      <Route path='/dashboard/custommer/order' element={<OrderCustommer />}></Route>
    </Routes>
  );
}

export default App;
