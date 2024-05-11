import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import CartPage from './pages/cartPage/CartPage';
import EditProductPage from './pages/editProductPage/EditProductPage';
import JoinPage from './pages/joinPage/JoinPage';
import LoginPage from './pages/loginPage/LoginPage';
import MainPage from './pages/mainPage/MainPage';
import NotFound from './pages/notFoundPage/NotFoundPage';
import OrderCompletedPage from './pages/orderCompletedPage/OrderCompletedPage';
import PaymentPage from './pages/paymentPage/PaymentPage';
import ProductDetailPage from './pages/productDetailPage/ProductDetailPage';
import SearchResult from './pages/searchResultPage/SearchResultPage';
import SellerCenterPage from './pages/sellerCenterPage/SellerCenterPage';
import GlobalStyle from './styles/global';
import './App.css';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/detail/:product_id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/sellercenter" element={<SellerCenterPage />} />
        <Route path="/productedit" element={<EditProductPage />} />
        <Route path="/ordercompleted" element={<OrderCompletedPage />} />
        <Route path="/result" element={<SearchResult />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
