import React, { useContext } from 'react';
import '../productpattern/ProductPattern.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ProductContext } from '../../../contextAPI/Contex';
import { IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';

import jbl660nc1 from '../../../assets/products/jbl660nc-1.png';
export default function ProductPattern() {
  const images = import.meta.glob('../../../assets/products/*.png', { eager: true });

  const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 5,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  focusOnSelect: true,
  dots: true,
  arrows: false,     // default: show arrows
  responsive: [
    {
      breakpoint: 1200,    // for screens *below* 1200px (lg threshold)
      settings: {
        arrows: false,       // on md/sm below 1200px, show arrows
        slidesToShow: 4     // adjust as desired
      }
    },
    {
      breakpoint: 992,     // maybe "md" threshold
      settings: {
        arrows: false,       // still show arrows
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,     // "sm"
      settings: {
        arrows: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,     // "xs"
      settings: {
        arrows: true,
        slidesToShow: 1
      }
    }
  ],
  // Here is the critical part: for "large and above" you might want to hide arrows:
  // Instead of relying purely on responsive above, you can add a custom CSS media‐rule to hide them.
};

  const products = useContext(ProductContext);
  const limitproducts=products.slice(0,6);

  const getImageSrc = (item) => {
    const imagePath = item.heroImage || item.assets?.[0];
    if (!imagePath) return '';

    const filename = imagePath.split('/').pop();
    const imageKey = `../../../assets/products/${filename}`;
    return images[imageKey]?.default || '';
  };

  const fallbackImage = jbl660nc1;

  return (
    <div className='product-container bg-dark px-3'>
      <h3 className='featured-products'>Featured Products</h3>
      <div className="slider-container text-white p-2" style={{ margin: "50px auto" }}>
        <Slider {...settings}>
          {limitproducts.map((item) => {
            const imgSrc = getImageSrc(item);

            return (
              <div key={item.id} className='product-pattern-container'>
                <p className="product-pattern-title mb-2 ">{item.title}</p>
                <Link to={`/products/${item.id}`}>
                  <img
                    className='product-pattern-image mb-2'
                    src={imgSrc || fallbackImage}
                    alt={item.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null; 
                      e.currentTarget.src = fallbackImage;
                    }}
                  />
                </Link>
                <div className="product-pattern-price d-flex">
                  <p className="pattern-price d-flex ms-5">
                    <IndianRupee size={18} color="#fbf6f6ff" className='iconrupee' />
                    {item.finalPrice}
                  </p>
                  <p className="product-pattern-originalprice opacity-50 text-decoration-line-through ms-2 d-flex">
                    <IndianRupee size={17} color="#aeaaaaff" />
                    {item.originalPrice}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
