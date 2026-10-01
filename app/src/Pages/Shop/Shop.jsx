import React, { useEffect } from 'react';
import './Shop.css';
import Container from '../../Components/Container';
import Header from '../../Components/AuthComponents/Header';
import Products from '../Products/Products';
import useProductInfo from '../../Zustand/ProductSlice';

export default function Shop() {
  const fetchProducts = useProductInfo((state) => state.fetchProducts);
  const page = useProductInfo((s) => s.page);
  const totalPages = useProductInfo((s) => s.totalPages);
  const products = useProductInfo((s) => s.products);
  const isPendingProducts = useProductInfo((s) => s.isPendingProducts);
  const error = useProductInfo((s) => s.error);
  const setPage = useProductInfo((s) => s.setPage);

  useEffect(() => {
    fetchProducts();
  }, [page]);

  if (error) {
    return (
      <div className='w-full py-2 text-center text-lg capitalize bg-red-200 text-red-700 border rounded'>
        Something Went Wrong
      </div>
    );
  }

  return (
    <Container className={'shop'}>
      <Header name={'shop'} />
      <Products
        products={products}
        isPendingProducts={isPendingProducts}
        totalPages={totalPages}
        page={page}
        setPage={setPage}
      />
    </Container>
  );
}