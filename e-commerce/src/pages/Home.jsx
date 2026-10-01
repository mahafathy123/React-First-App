import { useState, useEffect } from 'react';
import { fetchAllProducts, fetchProductsByCategory, searchProducts } from '../services/api';
import { ProductCard } from '../components/Products/ProductCard';
import './Home.css';

const categoriesList = [
  { id: 'all', name: 'All Products', slug: 'all' },
  { id: 'electronics', name: 'Electronics', slug: 'laptops' },
  { id: 'beauty', name: 'Beauty & Care', slug: 'beauty' },
  { id: 'fashion-m', name: "Men's Fashion", slug: 'mens-shirts' },
  { id: 'fashion-w', name: "Women's Fashion", slug: 'womens-dresses' },
  { id: 'groceries', name: 'Groceries', slug: 'groceries' },
];

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      let data = [];
      if (selectedCategory === 'all') {
        data = await fetchAllProducts(24);
      } else {
        data = await fetchProductsByCategory(selectedCategory);
      }
      setProducts(data);
      setLoading(false);
    };

    loadProducts();
  }, [selectedCategory]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    setLoading(true);
    const results = await searchProducts(searchTerm);
    setProducts(results);
    setLoading(false);
  };

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to E-Store 🛍️</h1>
        <p>Discover top deals on Electronics, Beauty, Fashion, Groceries & more!</p>
        
        <form onSubmit={handleSearch} className="search-bar">
          <input
            type="text"
            placeholder="Search for any product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </header>

      <div className="categories-bar">
        {categoriesList.map((cat) => (
          <button
            key={cat.id}
            className={`cat-btn ${selectedCategory === cat.slug ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.slug)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="loading">Loading Products... ⏳</div>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Home;

// import React, { useState } from 'react';
// import './Home.css';
// import { ProductCard } from '../components/Products/ProductCard';

// export const Home = ({ products = [] }) => {
//   // حالة لمعرفة القسم المختار حالياً (الافتراضي: الكل All)
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   // قائمة الأقسام المتاحة
//   const categories = [
//     'All',
//     'Electronics',
//     'Beauty & Care',
//     'Men\'s Fashion',
//     'Women\'s Fashion',
//     'Groceries'
//   ];

//   // فلترة المنتجات بناءً على القسم المختار
//   const filteredProducts = selectedCategory === 'All'
//     ? products
//     : products.filter(
//         (product) =>
//           product.category?.toLowerCase() === selectedCategory.toLowerCase()
//       );

//   return (
//     <div className="home-container">
//       {/* Hero Section */}
//       <div className="hero-section">
//         <h1>
//           Welcome to <span>E_stilore</span>
//         </h1>
//         <p>
//           Discover top deals on Electronics, Beauty, Fashion, Groceries & more!
//         </p>

//         <div className="search-bar">
//           <input type="text" placeholder="Search for any product..." />
//           <button type="button">Search</button>
//         </div>
//       </div>

//       {/* Categories Bar */}
//       <div className="categories-bar">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             className={`cat-btn ${selectedCategory === cat ? 'active' : ''}`}
//             onClick={() => setSelectedCategory(cat)}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Products Grid - هنا ضفنا مفتاح selectedCategory والتأخير الزمني للتأثير */}
//       <div className="products-grid" key={selectedCategory}>
//         {filteredProducts.map((product, index) => (
//           <div
//             className="product-card-wrapper"
//             key={product.id}
//             style={`{ '--delay': ${index * 0.05}s }`}
//           >
//             <ProductCard product={product} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;