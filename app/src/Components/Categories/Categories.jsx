import React from 'react'
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import sider1 from '../../assets/images/sider1.png'
import sider2 from '../../assets/images/sider2.png'

export default function Categories() {
  const categoriesList = [
    { name: "Women's Fashion", count: '120 Products', image: banner1 },
    { name: "Men's Collection", count: '85 Products', image: banner3 },
    { name: "Kids Wear", count: '95 Products', image: banner2 },
    { name: "Accessories", count: '60 Products', image: sider1 },
    { name: "Footwear & Shoes", count: '110 Products', image: sider2 },
    { name: "Trending Items", count: '45 Products', image: banner2 },
    { name: "Special Offers", count: '150 Products', image: banner1 },
    { name: "New Arrivals", count: '75 Products', image: sider1 },
  ]

  return (
    <div className="py-10">    
      <div className="mb-8 flex items-center gap-3">
        <h2 
          className="text-2xl font-extrabold uppercase tracking-wider inline-block pb-1 border-b-2"
          style={{ color: '#cece2b', borderColor: '#cece2b' }}
        >
          Categories
        </h2>
        <div className="h-0.5 flex-1 bg-gray-100 rounded-full" />
      </div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categoriesList.map((cat, index) => (
          <div 
            key={index} 
            className="group relative flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer overflow-hidden"
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#cece2b'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#f3f4f6'}
          >
            <div 
              className="absolute -right-8 -top-8 w-20 h-20 rounded-full transition-all duration-500 group-hover:scale-[3] opacity-0 group-hover:opacity-100" 
              style={{ backgroundColor: 'rgba(206, 206, 43, 0.12)' }}
            />

            <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-xl bg-gray-50 flex justify-center items-center shadow-inner border border-gray-100">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-125 group-hover:-rotate-3 transition-transform duration-500 ease-out" 
              />
            </div>
          
            <div className="z-10 flex-1">
              <h4 className="font-bold text-gray-800 text-base group-hover:text-black transition-colors">
                {cat.name}
              </h4>
              <p 
                className="text-xs font-semibold mt-1 transition-all duration-300"
                style={{ color: '#9e9e1c' }}
              >
                {cat.count}
              </p>
            </div>
            
            <div 
              className="z-10 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-lg font-bold pr-1"
              style={{ color: '#cece2b' }}
            >
              ➔
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}