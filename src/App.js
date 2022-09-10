import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Home from './page/home/Home';
import Login from './page/login/Login';
import Join from './page/join/Join';
import Cart from './page/cart/Cart';
import Payment from './page/payment/Payment';
import './App.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="product" />
        <Route path="payment" />
        <Route path="notfound" />
      </Routes>
    </>
  );
}

export default App;
