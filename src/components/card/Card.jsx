import React, { useState } from 'react'
import { IndianRupee } from 'lucide-react';
import '../card/Card.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../rtk_store/ProductSlice';


export default function Card({ item }) {
  console.log(item);
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }

    return stars.join('');
  };
  const dispatch = useDispatch();
  const[addstyle,setaddstyle]=useState(false)
  const handlestyle=()=>{
    dispatch(addToCart(item));
    setaddstyle(true);
    setTimeout(() => {
      setaddstyle(false);
    }, 1000);
  }
  return (

    <div class="card pt-2 bg-dark border border-secondary" style={{ width: "280px" }}  >
      <img
        src={
          new URL(
            `../../assets/products/${(item.heroImage || item.assets?.[0]).split('/').pop()
            }`,
            import.meta.url
          ).href
        }
        className="card-img-top"
        alt={item.title}
      />


      <div class="card-body bg-black ">
        <p className='rate-star-count'>{renderStars(item.rateCount)}</p>

        <h5 class="live text-white mt-2">{item.title}</h5>
        <p class="card-text over text-white opacity-75 mt-1"> {item.info}</p>
        <hr class="text-white" />
        <div className="product-price-card">
          <p className="price-card d-flex"> <IndianRupee size={15} color="#fbf6f6ff" className='iconrupee' />{item.finalPrice}</p>
          <p className="product-originalprice-card  opacity-50 text-decoration-line-through ms-2  d-flex"><IndianRupee size={15} color="#aeaaaaff" />{item.originalPrice}</p>
        </div>
        {addstyle?<button class="btn btn-success w-100">Added</button>:

        <button class="btn btn-danger w-100" onClick={handlestyle}>Add to cart</button>
      }
      </div>
    </div>


  )
}
