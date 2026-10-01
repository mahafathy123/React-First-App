// import './ProductCard.css';

// export const ProductCard = ({ product }) => {
//   return (
//     <div className="product-card">
//       <div className="img-container">
//         <img src={product.thumbnail} alt={product.title} loading="lazy" />
//         <span className="category-badge">{product.category}</span>
//       </div>
      
//       <div className="product-info">
//         <h3 className="product-title">{product.title}</h3>
//         <p className="product-desc">{product.description?.substring(0, 50)}...</p>
        
//         <div className="product-bottom">
//           <span className="price">${product.price}</span>
//           <button className="add-btn">Add To Cart🛒</button>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css'; // تأكدي من مسار ملف الـ CSS عندك

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // التوجه لصفحة التفاصيل بالـ ID الخاص بالمنتج
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className="img-container">
        <img src={product.thumbnail || product.image} alt={product.title} loading="lazy" />
        <span className="category-badge">{product.category}</span>
      </div>
      
      <h3 className="product-title">{product.title}</h3>
      <p className="product-desc">{product.description?.substring(0, 50)}...</p>
      
      <div className="product-bottom">
        <span className="price">${product.price}</span>
        <button 
          className="add-btn" 
          onClick={(e) => {
            e.stopPropagation(); // منع الانتقال لصفحة التفاصيل عند الضغط على زر السلة
            alert('Added to cart!');
          }}
        >
          Add To Cart 🛒
        </button>
      </div>
    </div>
  );
};