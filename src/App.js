import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { Reset } from 'styled-reset';
import Home from './page/Home';
import Login from './page/Login';
import Join from './page/Join';
import Cart from './page/Cart';
import Payment from './page/Payment';

function App() {
  return (
    <>
      <GlobalStyle />
      <Reset />
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
