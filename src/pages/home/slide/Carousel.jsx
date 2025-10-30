import React from 'react'
import sony from '../../../assets/products/sonyXb910n-1.png'
import jbl from '../../../assets/products/jbl660nc-1.png'
import boat from '../../../assets/products/boat131-3.png'
import  '../slide/Carousel.css'
import { IndianRupee } from 'lucide-react';
import { useNavigate } from 'react-router-dom'
export default function carousel({setsearch}) {
  const navigate = useNavigate();

  const handleShopNow = (id) => {
    navigate(`/products/${id}`); 
  };
  return (
  <div>
      <div id="carouselExampleCaptions" class="carousel slide bg-dark" data-bs-ride="carousel" data-bs-interval="5000" onClick={()=>{setsearch(false)}}>
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={sony} class="d-block w-50 float-end  sony" alt="..."/>
          <div class="  carousel-caption d-none d-md-block  w-50   text">
            <p>Sony WH-XB91ON</p>
            <h1>Give Your Favourite<br/>Music A Boost.</h1>
            <p class="mt-4 d-flex icon"><IndianRupee size={19} color="#fbf6f6ff" />13,489 <span class="opacity-50 text-decoration-line-through ms-2 d-flex"><IndianRupee size={19} color="#868383ff" />19,990</span></p>
            <button class="bg-danger text-white ps-3 pe-3 rounded-3" onClick={()=>handleShopNow(7)}>Shop Now</button>
          </div>
        </div>
        <div class="carousel-item">
          <img src={jbl} class="d-block w-50 float-end me-5 sony" alt="..."/>
          <div class="  carousel-caption d-none d-md-block w-50 text">
            <p>JBL Live 66ONC</p>
            <h1>keep The Noise Out,Or<br/>In.You Choose.</h1>
            <p class="mt-3 d-flex icon"><IndianRupee size={19} color="#fbf6f6ff" />9,999  <span class="opacity-50 text-decoration-line-through  ms-2 d-flex"><IndianRupee size={19} color="#868383ff" />14,999</span></p>
            <button class="bg-danger text-white ps-3 pe-3 mt-2 rounded-3" onClick={()=>handleShopNow(1)}>Shop Now</button>
          </div>
        </div>
        <div class="carousel-item">
          <img src={boat} class="d-block w-50 float-end me-5 sony" alt="..."/>
          <div class=" carousel-caption d-none d-md-block  w-50 text">
            <p>boAt Airdopes 131</p>
            <h1>Feather Weight For<br/>Comfort All-Day.</h1>
            <p class="mt-3 d-flex icon"><IndianRupee size={19} color="#fbf6f6ff" />1,099 <span class="opacity-50 text-decoration-line-through ms-2 d-flex"><IndianRupee size={19} color="#868383ff" />2,990</span></p>
            <button class="bg-danger text-white ps-3 pe-3 rounded-3" onClick={()=>handleShopNow(3)}>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
   
    </div>
  )
}
