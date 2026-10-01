// import React from 'react';
// import ProductCard from '../../Components/ProductCard/ProductCard';
// import './Products.css';
// import { Pagination } from '@mui/material';

// export default function Products({
//   products,
//   isPendingProducts,
//   totalPages,
//   page,
//   setPage
// }) {
//   return (
//     <div className='mt-10'>
//       <div className='grid my-10 mt-12 gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
//         {isPendingProducts ? (
//           <p className="text-center col-span-full">Loading Products...</p>
//         ) : (
//           products?.map((item) => (
//             <ProductCard key={item.id} product={item} {...item} />
//           ))
//         )}
//       </div>

//       <div className='flex items-center justify-center my-5'>
//         <Pagination 
//           count={totalPages || 1} 
//           page={page || 1}
//           color="primary" 
//           onChange={(_, value) => setPage && setPage(value)}
//         />
//       </div>
//     </div>
//   );
// }
import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import ProductSkeleton from '../../skeltons/ProductSkeleton';
import './Products.css';
import { Pagination } from '@mui/material';

export default function Products({
  products,
  isPendingProducts,
  totalPages,
  page,
  setPage
}) {
  return (
    <div className='mt-10'>
      <div className='grid my-10 mt-12 gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {isPendingProducts ? (
          Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))
        ) : (
          products?.map((item) => (
            <ProductCard key={item.id} product={item} {...item} />
          ))
        )}
      </div>

      <div className='flex items-center justify-center my-5'>
        <Pagination 
          count={totalPages || 1} 
          page={page || 1}
          color="primary" 
          onChange={(_, value) => setPage && setPage(value)}
        />
      </div>
    </div>
  );
}