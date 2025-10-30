import React, { useContext, useState } from 'react';
import '../Search_Product/Search_Item.css';
import { ProductContext } from '../../contextAPI/Contex';
import { Link } from 'react-router-dom';

export default function Search_Item({setsearch}) {
  const [brandname, setBrandname] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false); 
  const products = useContext(ProductContext);
  console.log('Products:', products);
  console.log('Brandname:', brandname);
  console.log('IsInputFocused:', isInputFocused);
  const filteredProducts = brandname
    ? products.filter(item => item.brand.toLowerCase() === brandname.toLowerCase())
    : products; 

  console.log('FilteredProducts:', filteredProducts);
  const handleClear = () => {
    setBrandname(''); 
    setIsInputFocused(false); 
  };
  const handledrop=()=>{
    setsearch(false);
    setIsInputFocused(false);
  }

  return (
    <div className="search-item-container" id="search-item-container" >
      <div>
      <input type="text" placeholder="Search for products" className="input" value={brandname} onChange={(e) => setBrandname(e.target.value)} onClick={() => setIsInputFocused(true)} />
    
          <span className="clear-icon" onClick={handleClear}>
            ✕
          </span>
      
        </div>
     
      {isInputFocused && ( <div className="search-list" id="search-list"> {filteredProducts.length > 0 ? ( filteredProducts.map((item, index) => (
              <ul key={index}><Link to={`/products/${item.id}`}  className='link-product-list'><li onClick={handledrop}>{item.title}</li></Link></ul>
            ))
          ) : ( products.map((item, index) => (<ul key={index}><Link to={`/products/${item.id}`} className='link-product-list' ><li  onClick={handledrop}>{item.title}</li></Link> </ul> )))}
        </div>
      )}
    
    </div>
  );
}

