
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
import PrivateRoutes from './components/PrivateRoutes';
import PrivateRoutesCostumer from './components/PrivateRoutesCostumer';
import LoginSeller from './page/LoginSeller';
import LoginCustomer from './page/LoginCustomer';
import SignUpCustomer from './page/SignUpCustomer'
import SignUpSeller from './page/SignUpSeller'
import ResetPassword from './page/ResetPassword'
import PasswordConfirmation from './page/PasswordConfirmation'
import ResetPasswordRelogin from './page/ResetPasswordRelogin'
import ResetPasswordSeller from './page/ResetPasswordSeller'
import PasswordConfirmationSeller from './page/PasswordConfirmationSeller'
import ResetPasswordReloginSeller from './page/ResetPasswordReloginSeller'
import ProfileAddressCostomer from './page/ProfileAddressCostomer';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login-customer' element={<LoginCustomer />}></Route>
        <Route path='/signup-customer' element={<SignUpCustomer />}></Route>
        <Route path='/login-seller' element={<LoginSeller />}></Route>
        <Route path='/signup-seller' element={<SignUpSeller />}></Route>
        <Route path='/reset-password-customer' element={<ResetPassword />}></Route>
        <Route path='/reset-confirmation-customer' element={<PasswordConfirmation />}></Route>
        <Route path='/reset-password-relogin-customer' element={<ResetPasswordRelogin />}></Route>
        <Route path='/reset-password-seller' element={<ResetPasswordSeller />}></Route>
        <Route path='/reset-confirmation-seller' element={<PasswordConfirmationSeller />}></Route>
        <Route path='/reset-password-relogin-seller' element={<ResetPasswordReloginSeller />}></Route>
        <Route path='/bag' element={<PrivateRoutesCostumer><Bag /></PrivateRoutesCostumer>}></Route>
        <Route path='/category' element={<PrivateRoutes><Category /></PrivateRoutes>}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/profile' element={<Dashboard />}></Route>
        <Route path='/profile/seller/addproduct' element={<PrivateRoutes><SellingProducts /></PrivateRoutes>}></Route>
        <Route path='/profile/seller/products' element={<PrivateRoutes><ProductSeller /></PrivateRoutes>}></Route>
        <Route path='/profile/seller/order' element={<PrivateRoutes><OrderSeller /></PrivateRoutes>}></Route>
        <Route path='/profile/seller/profile' element={<PrivateRoutes><ProfileSeller /></PrivateRoutes>}></Route>
        <Route path='/profile/custommer/order' element={<PrivateRoutesCostumer><OrderCustommer /></PrivateRoutesCostumer>}></Route>
        <Route path='/profile/custommer/address' element={<ProfileAddressCostomer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
