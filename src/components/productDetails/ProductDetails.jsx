import React, { useContext, useState } from 'react';
import { IndianRupee } from 'lucide-react';
import '../productDetails/ProductDetails.css';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../contextAPI/Contex';
import reviewsData from '../../data/reviewsData';
import { FaUserCircle } from 'react-icons/fa';
import Card from '../card/card';
import servicesData from '../../data/servicesData';
import Footer from '../footer/Footer';
import { useDispatch } from 'react-redux'; 
import { addToCart } from '../../rtk_store/ProductSlice'; 

export default function ProductDetails() {
  const dispatch = useDispatch(); // New
  const { id } = useParams();
  const products = useContext(ProductContext);
  const filterData = products.find(item => item.id === parseInt(id));
  const categoryfiltered = products.filter(item => item.category === filterData.category);
  console.log(categoryfiltered);
  console.log(filterData);
  console.log(products);
  const [selectedImage, setSelectedImage] = useState(
    filterData.heroImage || filterData.assets?.[0]
  );
  const [activeTab, setActiveTab] = useState('specification');

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }

    return stars.join('');
  };
  const discount = () => {
    const originalPrice = filterData.originalPrice;
    const finalPrice = filterData.finalPrice;
    const remainingprice = originalPrice - finalPrice;
    const discountPercentage =
      originalPrice > 0 ? ((remainingprice / originalPrice) * 100).toFixed(2) : 0;
    return {
      remainingprice: remainingprice > 0 ? remainingprice : 0,
      discountPercentage: discountPercentage > 0 ? discountPercentage : 0,
    };
  };
  const { remainingprice, discountPercentage } = discount();
  const[addstyle,setaddstyle]=useState(false)
    const handlestyle=()=>{
      dispatch(addToCart(filterData));
      setaddstyle(true);
      setTimeout(() => {
        setaddstyle(false);
      }, 1000);
    }

  return (
    <div className="bg-black">
      <div className="product-data">
        <div className="thumbnail-container">
          {filterData.assets && filterData.assets.map((img, index) => {
            const imagePath = new URL(
              `../../assets/products/${img.split('/').pop()}`, import.meta.url).href;
            return (
              <img
                key={index}
                className={`product-image ${selectedImage.endsWith(img.split('/').pop()) ? 'active' : ''}`}
                src={imagePath}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(img)}
              />
            );
          })}
        </div>
        <div className="hero-image">
          <img
            src={
              new URL(
                `../../assets/products/${selectedImage.split('/').pop()}`, import.meta.url).href
            }
            alt={filterData.title}
          />
        </div>
        <div className="product-info">
          <h2>{filterData.title}</h2>
          <p>{filterData.info}</p>
          <span className="rate-star">{renderStars(filterData.rateCount)}</span>
          <span className="rate-count"> | {filterData.ratings} Ratings</span>
          <hr className="mt-4" />
          <div className="product-price">
            <p className="price d-flex">
              <IndianRupee size={32} color="#fbf6f6ff" className="iconrupee" />
              {filterData.finalPrice}
            </p>
            <p className="product-originalprice mt-2 opacity-50 text-decoration-line-through ms-2  d-flex">
              <IndianRupee size={17} color="#aeaaaaff" />
              {filterData.originalPrice}
            </p>
          </div>
          <p className="discount d-flex text-success ">
            You save:
            <IndianRupee size={19} color="#266f10ff" /> {remainingprice} ({discountPercentage}
            %)
          </p>
          <p className="product-text-info opacity-50">(Inclusive of all taxes)</p>
          {filterData.quantity > 0 ? (
            <button className="product-btn bg-success p-1">In Stock</button>
          ) : (
            <button className=" product-btn bg-danger  p-1">Out of Stock</button>
          )}
          <hr className="mt-4" />
          <p>Offers & Discounts</p>
          <button className="discount-btn">No Cost EMI on Credit Card</button>
          <button className="discount-btn">Pay Later & Avail Cashback</button>
          <hr className="mt-4" />
           {addstyle?<button class="btn btn-success w-100">Added</button>:

        <button class="btn btn-danger w-100" onClick={handlestyle}>Add to cart</button>
      }
        </div>
      </div>
      <div className="product-overview text-white">
        <button
          className={`overview-button ${activeTab === 'specification' ? 'active' : ''}`}
          onClick={() => setActiveTab('specification')}
        >
          Specification
        </button>
        <button
          className={`overview-button ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`overview-button ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </div>
      {activeTab === 'specification' && (
        <div className="prouct-overview-info text-white ms-5">
          <p>
            Brand
            <span className="overview" style={{ marginLeft: '190px' }}>
              {filterData.brand}
            </span>
          </p>
          <p>
            Model
            <span className="overview" style={{ marginLeft: '180px' }}>
              {filterData.title}
            </span>
          </p>
          <p>
            Generic Name
            <span className="overview" style={{ marginLeft: '130px' }}>
              {filterData.category}
            </span>
          </p>
          <p>
            Headphone Type
            <span className="overview" style={{ marginLeft: '110px' }}>
              {filterData.type}
            </span>
          </p>
          <p>
            Connectivity
            <span className="overview" style={{ marginLeft: '140px' }}>
              {filterData.connectivity}
            </span>
          </p>
          <p>
            Microphone
            <span className="overview" style={{ marginLeft: '140px' }}>
              Yes
            </span>
          </p>
        </div>
      )}

      {activeTab === 'overview' && (
        <div className="product-info text-white opacity-75 mt-4">
          <p>
            The <span className="text-danger">{filterData.title}</span> Wireless
            Over-Ear NC Headphones provides with fabulous sound quality
          </p>
          <ul>
            <li>Sound Tuned to Perfection</li>
            <li>Comfortable to Wear</li>
            <li>Long Hours Playback Time</li>
          </ul>
          <p className='w-50'>
            Buy the{' '}
            <span className="text-danger ">
              {filterData.title} {filterData.info}
            </span>{' '}
            which offers you with fabulous music experience by providing you with
            awesome sound quality that you can never move on from.
          </p>
        </div>
      )}

      {activeTab === 'reviews' && (
        <div className="product-reviews-data text-white p-4">
          {reviewsData && reviewsData.length > 0 ? (
            reviewsData.map((review) => (
              <div key={review.id} className="review-item mb-3 pb-3 ">
                <div className="d-flex align-items-center mb-2">
                  <FaUserCircle size={40} color="#fbf6f6ff" className="me-2" />
                  <strong>{review.name}</strong>
                </div>
                <div className="review-rating text-danger mb-1">
                  {'★'.repeat(review.rateCount)}
                  {'☆'.repeat(5 - review.rateCount)}{' '}
                  <span className="text-secondary ms-2">{review.date}</span>
                </div>
                <p className="review-comment opacity-75 text-white">{review.review}</p>
              </div>
            ))
          ) : (
            <p className="opacity-50">No reviews yet.</p>
          )}
        </div>
      )}
      <div className="related-products text-white">
        <h3 className='text-center'>Top Related Products</h3>
        <div className="product-details-headphones text-white row p-2 mt-3">
          {categoryfiltered.map((item, index) => (<div className="product-card-details col-3 mb-2" key={index}>
            <Card item={item} />
          </div>))}
        </div>
      </div>
      <h3 className='text-white text-center p-3'>Our Advantages</h3>
      <div className="product-service-data text-white">

        {servicesData.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="product-icon">
              <Icon size={54} color="red" />
              <div className="product-icon-info">
                <p>{item.title}</p>
                <p className='text-secondary'>{item.info}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}