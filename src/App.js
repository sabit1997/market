import { Routes, Route } from 'react-router-dom';
import { ProductDataProvider } from './context/ProductDataContext';
import GlobalStyle from './styles/global';
import Home from './page/home/Home';
import Login from './page/login/Login';
import Join from './page/join/Join';
import Cart from './page/cart/Cart';
import Payment from './page/payment/Payment';
import NotFound from './page/NotFound/NotFound';
import ProductDetail from './page/productDetail/ProductDetail';
import SellerCenter from './page/sellerCenter/SellerCenter';
import './App.css';

function App() {
  return (
    <ProductDataProvider>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/detail/:product_id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/sellercenter" element={<SellerCenter />} />
        <Route path="notfound" element={<NotFound />} />
      </Routes>
    </ProductDataProvider>
  );
}

export default App;
