import React, { createContext, useState } from 'react'
import productsData from '../data/productsData';

export  const ProductContext=createContext();
console.log(ProductContext)
export default function Contex({children}) {
   const [products, setProducts] = useState(productsData);
   console.log(products);
return (
    <ProductContext.Provider value={products}>
        {children}
    </ProductContext.Provider>
  )
}
