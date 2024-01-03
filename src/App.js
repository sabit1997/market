import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import NotFound from './template/NotFound/NotFound';
import ProductDetailPage from './pages/ProductDetailPage';
import SellerCenterPage from './pages/SellerCenterPage';
import EditProductPage from './pages/EditProductPage';
import OrderCompletedPage from './pages/OrderCompletedPage';
import SearchResult from './template/search/SearchResult';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import MainPage from './pages/Main/MainPage';
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
