import React from 'react'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

const Home = () => {
  return (
   <div> <Navbar/>
   <Products/>
   <Categories/>
   </div>
  )
}

export default Home