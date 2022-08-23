import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { Reset } from 'styled-reset';
import Home from './page/Home';
function App() {
  return (
    <div>
      <GlobalStyle />
      <Reset />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" />
        <Route path="/join" />
        <Route path="/cart" />
        <Route path="product" />
        <Route path="payment" />
        <Route path="notfound" />
      </Routes>
    </div>
  );
}

export default App;
