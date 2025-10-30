import React, { useContext } from 'react'
import { ProductContext } from '../../../contextAPI/Contex'
import Card from '../../../components/card/Card';
import { Link } from 'react-router-dom';

export default function Earbuds() {
  const products=useContext(ProductContext);
  const Hproducts=products.filter(item=>item.category==="Earbuds");
  return (
    <div className="product-details-headphones text-white row p-2">
        {Hproducts.map((item,index)=>(<div className="product-card-details col-3 mb-2" key={index}>
          <Card item={item}/>
          </div>))}
           <div className="product-card-details col-3 mb-2 " style={{ width: '280px', height: '430px', cursor: 'pointer' }}>
                      <Link to="/allproduct"><div className="text-center border border-secondary text-white p-5  d-flex align-items-center justify-content-center" style={{ width: '280px', height: '430px', cursor: 'pointer' }}>
                      <h5 className="text-white mb-3">Browse All Products</h5>
                      </div>
                   </Link>
                   </div>
       </div>
  )
}