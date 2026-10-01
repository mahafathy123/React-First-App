import React, { useRef } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { FaCaretDown, FaCartShopping, FaHeart, FaSun, FaMoon } from "react-icons/fa6"
import useProductInfo from '../../Zustand/ProductSlice'
import useAuth from '../../Zustand/AuthSlice'
import { signOut } from 'firebase/auth'
import { firebaseAuth } from '../../FireBase/connect'
import useCartStore from '../../Zustand/CartSlice'
import useThemeStore from '../../Zustand/ThemeSlice'

export default function Navbar() {
  const dropdown = useRef()
  const setSelectedCategory = useProductInfo((state) => state.setSelectedCategory)
  const setPage = useProductInfo((state) => state.setPage)
  const currentUser = useAuth((state) => state.currentUser)
  const cart = useCartStore((state) => state.cart)
  const wishlist = useCartStore((state) => state.wishlist)  
  const { isDarkMode, toggleTheme } = useThemeStore()

  const toggleDropDown = (e) => {
    e.stopPropagation()
    dropdown.current.classList.toggle('scale-y-0')
  }

  const handleCategorySelect = (categoryName) => {
    const categoryMap = {
      women: "women",
      men: "men",
      kids: "kids"
    }
    
    setSelectedCategory(categoryMap[categoryName])
    if (setPage) setPage(1);
    
    dropdown.current.classList.add('scale-y-0')
  }

 const handleLogout = async () => {
    try {
      await signOut(firebaseAuth)
    } catch (error) {
      console.error("Error signing out: ", error)
    }
  }

  return (    
    <div className='Navbar sticky top-0 z-50 flex-wrap bg-(--secondary-color) text-white md:px-10 px-3 py-3 flex items-center justify-between'>
      <div className='text-2xl font-black capitalize'>Maha <span className='text-(--main-color)'>Shop</span></div>
      
      <ul className='flex gap-2 items-center'>
        <li>
          <NavLink className={'text-lg capitalize duration-300 font-bold py-2 px-3 rounded'} to={'/'}>Home</NavLink>
        </li>

        <li>
          <NavLink className={'text-lg capitalize duration-300 font-bold py-2 px-3 rounded'} to={'/about'}>About</NavLink>
        </li>

        <li>
          <NavLink className={'text-lg capitalize duration-300 font-bold py-2 px-3 rounded'} to={'/shop'}>Shop</NavLink>
        </li>

        <li className='relative'>
          <div className='flex gap-1 items-center text-xl capitalize font-bold py-3 px-3 cursor-pointer' onClick={toggleDropDown}>
            Products <FaCaretDown />
            <div ref={dropdown} className="dropdown z-10 origin-top scale-y-0 rounded duration-300 absolute inset-s-0 bg-(--main-color) w-max flex flex-col px-5 py-3 top-full">
              <button onClick={() => handleCategorySelect('women')} className='text-start px-2 py-1 text-black duration-300 hover:bg-neutral-200 rounded w-full'>Women</button>
              <button onClick={() => handleCategorySelect('men')} className='text-start px-2 py-1 text-black duration-300 hover:bg-neutral-200 rounded w-full'>Men</button>
              <button onClick={() => handleCategorySelect('kids')} className='text-start px-2 py-1 text-black duration-300 hover:bg-neutral-200 rounded w-full'>Kids</button>
            </div>
          </div>
        </li>

        <li>
          <NavLink className={'text-lg capitalize font-bold py-3 px-3 rounded'} to={'/contacts'}>Contacts</NavLink>
        </li>
      </ul>

      <div className='flex items-center gap-4'>
       {currentUser ? (
          <div className='flex items-center gap-3'>
            <div className='flex items-center gap-2 bg-slate-800/80 text-white px-3 py-1.5 rounded-full border border-slate-700 shadow-sm'>
              <span className='w-7 h-7 rounded-full bg-(--main-color) text-black font-black flex items-center justify-center text-sm uppercase'>
                {(currentUser?.userName || currentUser?.firstname || currentUser?.email)?.[0] || 'U'}
              </span>
              
              <span className='text-sm font-semibold capitalize tracking-wide pr-1'>
                Hi, <strong className='text-(--main-color)'>
                  {(currentUser?.userName || currentUser?.firstname || currentUser?.email?.split('@')[0] || 'User').split(' ')[0]}
                </strong>
              </span>
            </div>

            <button 
              onClick={handleLogout}
              className='text-xs font-bold text-red-400 hover:text-white bg-red-500/10 hover:bg-red-600 border border-red-500/30 px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer'
            >
              Logout
            </button>
          </div>
        ) : (
          <div className='flex items-center gap-2'>
            <NavLink to={'/sign-in'} className={'text-lg px-2 py-1 text-black duration-300 hover:bg-neutral-200 rounded hover:text-(--main-color)'}>SignIn</NavLink>
            <div className='h-8 w-0.5 bg-white rounded gap-7'></div>
            <NavLink to={'/sign-up'} className={'text-lg px-2 py-1 text-black duration-300 hover:bg-neutral-200 rounded hover:text-(--main-color)'}>SignUp</NavLink>
          </div>
        )}

        <button
          onClick={toggleTheme}
          className="p-1.5 rounded-full text-white hover:text-[#cece2b] transition-colors cursor-pointer flex items-center justify-center"
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? <FaSun className="text-[#cece2b]" fontSize={20} /> : <FaMoon fontSize={20} />}
        </button>

        <NavLink to={'/WishlistPage'} className='relative text-white hover:text-[#cece2b] transition-colors p-1'>
          <FaHeart fontSize={22} />
          <span className='absolute -top-2 -right-2 bg-[#cece2b] text-slate-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-slate-900'>
            {wishlist ? wishlist.length : 0}
          </span>
        </NavLink>

        <NavLink to={'/cart'} className='relative text-white hover:text-[#cece2b] transition-colors p-1'>
          <FaCartShopping fontSize={22} />
          <span className='absolute -top-2 -right-2 bg-[#cece2b] text-slate-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-slate-900'>
            {cart ? cart.length : 0}
          </span>
        </NavLink>
          
      </div>
    </div>
  )
}