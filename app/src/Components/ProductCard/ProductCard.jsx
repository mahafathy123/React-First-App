import React from 'react';
import { FaHeart, FaShoppingCart ,FaTrash} from 'react-icons/fa';
import './ProductCard.css';
import useCartStore from '../../Zustand/CartSlice';

export default function ProductCard(props) {
  const product = props.product || props; 
  const title = product.title || 'Product Title';
  const price = product.price || 0;
  const image = product.image ||  product.img ||  'https://via.placeholder.com/150';
  const discount = product.discount;

  const oldPrice = discount 
    ? (price / (1 - discount / 100)).toFixed(2) 
    : null;

  const addToCart = useCartStore((state) => state.addToCart);
  const toggleWishlist = useCartStore((state) => state.toggleWishlist);
  const wishlist = useCartStore((state) => state.wishlist);

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <div className="product-card">
      {discount && (
        <div className="ribbon">
          <span>{discount}%</span>
        </div>
      )}

      <div className="product-img-box">
        <img src={image} alt={title} />
      </div>

      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        
        <div className="price-box">
          <span className="current-price">${price}</span>
          {oldPrice && <span className="old-price">${oldPrice}</span>}
        </div>
      </div>

     <div className="card-buttons">
    <button 
    className="yellow-btn" 
    onClick={() => toggleWishlist(product)}
    title={isWishlisted ? "Add To Wishlist" : "Remove From Wishlist"}
  >
    {isWishlisted ? (
      <FaTrash style={{ color: 'red' }} />
    ) : (
      <FaHeart />
    )}
  </button>

  <button 
    className="yellow-btn" 
    onClick={() => addToCart(product)}
  >
    <FaShoppingCart />
  </button>
</div>
    </div>
  );
}