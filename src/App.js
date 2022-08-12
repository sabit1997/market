import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/login" />
      <Route path="/join" />
      <Route path="/cart" />
      <Route path="product" />
      <Route path="payment" />
      <Route path="notfound" />
    </Routes>
  );
}

export default App;
