import React from 'react'
import { FaCheck, FaShippingFast, FaExchangeAlt, FaHeadset } from 'react-icons/fa'

export default function Services() {
  const services = [
    { icon: <FaCheck className="text-3xl" />, title: 'Quality Product', desc: '100% Guaranteed Products' },
    { icon: <FaShippingFast className="text-3xl" />, title: 'Free Shipping', desc: 'On Order Over $99' },
    { icon: <FaExchangeAlt className="text-3xl" />, title: '14-Day Return', desc: 'Money Back Guarantee' },
    { icon: <FaHeadset className="text-3xl" />, title: '24/7 Support', desc: 'Dedicated Support' },
  ]

  return (
    <div className="py-10">   
      <div className="mb-8">
        <h2 
          className="text-2xl font-bold uppercase tracking-wider inline-block pb-1 border-b-2"
          style={{ color: '#cece2b', borderColor: '#cece2b' }}
        >
          Services
        </h2>
      </div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((item, index) => (
          <div 
            key={index} 
            className="group relative bg-white border border-gray-100 p-6 rounded-xl flex items-center gap-5 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer overflow-hidden"
            style={{ borderColor: 'transparent' }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#cece2b'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#f3f4f6'}
          >
            <div 
              className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full transition-all duration-500 group-hover:scale-[2.5]" 
              style={{ backgroundColor: 'rgba(206, 206, 43, 0.1)' }}
            />
            <div 
              className="shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              style={{ color: '#cece2b' }}
            >
              {item.icon}
            </div>         
            <div className="z-10">
              <h5 className="font-bold text-gray-800 text-lg transition-colors group-hover:text-[#9e9e1c]">
                {item.title}
              </h5>
              <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}