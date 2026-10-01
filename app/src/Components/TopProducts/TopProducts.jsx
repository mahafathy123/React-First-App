import React, { useEffect } from 'react'
import Container from '../Container'
import Products from '../../Pages/Products/Products'
import useProductInfo from '../../Zustand/ProductSlice'

export default function TopProducts() {
  const selectedCategory = useProductInfo((state) => state.selectedCategory) || "women's clothing"
  const fetchProducts = useProductInfo((state) => state.fetchProducts)
  const page = useProductInfo((s) => s.page)
  const totalPages = useProductInfo((s) => s.totalPages)
  const products = useProductInfo((s) => s.products)
  const isPendingProducts = useProductInfo((s) => s.isPendingProducts)
  const error = useProductInfo((s) => s.error)
  const setPage = useProductInfo((s) => s.setPage)

  useEffect(() => {
    fetchProducts(selectedCategory)
  }, [selectedCategory, page])

  if (error) {
    return (
      <div className='w-full py-2 text-center text-lg capitalize bg-red-200 text-red-700 border rounded'>
        Something Went Wrong
      </div>
    )
  }

   const getTitle = () => {
    if (selectedCategory.includes('women')) return "Women's Collection"
    if (selectedCategory.includes('men')) return "Men's Collection"
    return "Kids' Collection"
  }

  return (
    <Container className={'shop'}>
      <div className="text-center my-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide uppercase text-gray-800 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-yellow-200 after:rounded-full">
          {getTitle()}
        </h2>
        <p className="text-sm text-gray-500 mt-2 font-light">
          Discover the latest trends & luxury styles
        </p>
      </div>

      <Products
        products={products}
        isPendingProducts={isPendingProducts}
        totalPages={totalPages}
        page={page}
        setPage={setPage}
      />
    </Container>
  )
}