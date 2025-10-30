import React, { useContext } from 'react';
import { ProductContext } from '../../../contextAPI/Contex';
import Card from '../../../components/card/Card';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function ProductsDetailsAll() {
  const products = useContext(ProductContext);
  const displayedProducts = products.slice(0, 11);

  return (
    <div className="product-details-all text-white row p-2 ps-5" style={{width:"100%"}}>
      {displayedProducts.map((item, index) => (
        <div className="product-card-details col-3 mb-2" key={index}>
          <Card item={item} />
        </div>
      ))}
     <div className="product-card-details col-3 mb-3 " style={{ width: '280px', height: '430px', cursor: 'pointer' }}>
          <Link to="/allproduct"> <div className="text-center border border-secondary text-white p-5  d-flex align-items-center justify-content-center" style={{ width: '280px', height: '430px', cursor: 'pointer' }}>
            <h5 className="text-white mb-3 browse-card" style={{textDecoration:"none"}}>Browse All Products </h5>< FaArrowRight size={35} color='white'/>
            </div>
             </Link>
         </div>
        
    </div>
  );
}

