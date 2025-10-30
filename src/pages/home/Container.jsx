import React, { useState } from 'react'
import Carousel from '../home/slide/Carousel'
import ProductPattern from './productpattern/ProductPattern'
import Navbar from './section/Navbar'
import ProductsDetailsAll from './singleproduct/ProductsDetailsAll'
import Headphones from './singleproduct/Headphones'
import Earphones from './singleproduct/Earphones'
import Earbuds from './singleproduct/Earbuds'
import Neckbands from './singleproduct/Neckbands'
import Advantage from './advantages/Advantage'
import Footer from '../../components/footer/Footer'

export default function Container({ setsearch }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  return (
    <div className='bg-dark'>
      <Carousel setsearch={setsearch} />
      <ProductPattern />
      <Navbar setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      {selectedCategory === 'All' && <ProductsDetailsAll />}
      {selectedCategory === 'Headphones' && <Headphones />}
      {selectedCategory === 'Earphones' && <Earphones />}
      {selectedCategory === 'Earbuds' && <Earbuds />}
      {selectedCategory === 'Neckbands' && <Neckbands />}
      <Advantage/>
      <Footer/>
    </div>
  )
}

