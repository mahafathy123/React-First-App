import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Services from '../../Components/Services/Services'
import Categories from '../../Components/Categories/Categories'
import Products from '../Products/Products'
import ProductCard from '../../Components/ProductCard/ProductCard'
import TopProducts from '../../Components/TopProducts/TopProducts'

export default function Home() {
  return (
    <div className="Home container px-3 md:px-10 xl:px-20 mx-auto">
      <Header />
      <Services />
      <Categories />      
      <TopProducts/>
    </div>
  )
}