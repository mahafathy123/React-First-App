import React from 'react';
import './WishlistPage.css';
import Container from '../../Components/Container';
import Header from '../../Components/AuthComponents/Header';
import useCartStore from '../../Zustand/CartSlice';
import ProductCard from '../../Components/ProductCard/ProductCard';

export default function WishlistPage() {
  const wishlist = useCartStore((state) => state.wishlist);

  return (
    <Container>
      <Header name={'WishList'} user />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {wishlist.length === 0 ? (
          <h2 className="text-[#cece2b] font-bold text-xl py-8 text-center col-span-full">No products in wishlist yet</h2>
        ) : (
          wishlist.map((item) => (
            <ProductCard key={item.id || item._id || item.title} product={item} />
          ))
        )}
      </div>
    </Container>
  );
}