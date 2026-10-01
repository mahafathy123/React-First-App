import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from 'react'
import Home from './pages/Home';
import {ProductsDetails} from './pages/ProductsDetails';

function App() {
  // البيانات الأصلية للمنتجات
  const [products, setProducts] = useState([]); 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/product/:id" element={<ProductsDetails products={products} />} />
      </Routes>
    </Router>
  );
}

export default App;