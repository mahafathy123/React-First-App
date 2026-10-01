import React from 'react'
import './Header.css'
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import sider1 from '../../assets/images/sider1.png'
import sider2 from '../../assets/images/sider2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectCube } from 'swiper/modules'
import 'swiper/css';
import "swiper/swiper-bundle.css"

export default function Header() {
  const banners = [
    { image: banner1, title: 'women fasion' },
    { image: banner2, title: 'kids fasion' },
    { image: banner3, title: 'men fasion' },
  ]

  return (
    <div className='Header grid grid-cols-1 lg:grid-cols-12 my-7 gap-8'>
      {/* Main Slider */}
      <div className='h-[50vh] col-span-1 lg:col-span-8 rounded-lg'>
        <div className='size-full rounded-lg'>
          <Swiper
            effect='cube'
            modules={[Autoplay, Navigation, Pagination, EffectCube]}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: .94
            }}
            navigation={true}
            autoplay={{
              delay: 1200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            className='size-full rounded-lg'
            spaceBetween={20}
          >
            {
              banners.map((ele, index) => (
                <SwiperSlide className='size-full' key={index}>
                  <div className='rounded-lg relative overflow-hidden size-full'>
                    <img src={ele.image} className='size-full rounded object-cover' alt='' />

                    <div className="absolute inset-0 bg-black/50 text-white flex flex-col items-center justify-center p-4 text-center">
                      <p className='text-2xl md:text-3xl font-bold capitalize mb-2'>{ele.title}</p>

                      <p className='px-5 lg:px-14 text-sm md:text-base line-clamp-3 max-h-[4.5rem] overflow-hidden my-2'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus pariatur tempore consequuntur natus, dolor est harum quo eum tenetur officiis distinctio repudiandae!
                      </p>

                      <button className='border-2 text-white py-2 px-5 hover:bg-white hover:text-black transition-colors mt-2'>
                        Shop Now
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>    
      <div className='h-[50vh] col-span-1 lg:col-span-4 flex flex-col gap-4'>
        {/* Banner 1 */}
        <div className='relative h-[calc(50%-0.5rem)] rounded-lg overflow-hidden group'>
          <img src={sider1} className='size-full object-cover transition-transform duration-500 group-hover:scale-110' alt="Offer 1" />
          <div className='absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-2 text-center'>
            <span className='text-yellow-400 text-xs font-semibold uppercase tracking-widest'>Save 20%</span>
            <h3 className='text-xl font-bold my-1'>Special Offer</h3>
            <button className='bg-yellow-500 hover:bg-yellow-600 text-black text-xs font-bold py-1.5 px-4 rounded transition-colors'>
              Shop Now
            </button>
          </div>
        </div>

        <div className='relative h-[calc(50%-0.5rem)] rounded-lg overflow-hidden group'>
          <img src={sider2} className='size-full object-cover transition-transform duration-500 group-hover:scale-110' alt="Offer 2" />
<div className='absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-2 text-center'>
            <span className='text-yellow-400 text-xs font-semibold uppercase tracking-widest'>Save 20%</span>
            <h3 className='text-xl font-bold my-1'>Special Offer</h3>
            <button className='bg-yellow-500 hover:bg-yellow-600 text-black text-xs font-bold py-1.5 px-4 rounded transition-colors'>
              Shop Now
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}