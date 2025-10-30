import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import '../cart/Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { IndianRupee } from 'lucide-react';
import { FaTrash } from 'react-icons/fa';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../rtk_store/ProductSlice'; // Adjust path if needed
import Footer from '../../components/footer/Footer';

export default function Cart() {
  const cartItems = useSelector((state) => state.productItems.Data);
  const dispatch = useDispatch();
  console.log("cartItems", cartItems);
  const totalOriginalPrice = cartItems.reduce((acc, item) => acc + item.originalPrice * item.quantity, 0) || 0;
  const totalFinalPrice = cartItems.reduce((acc, item) => acc + item.finalPrice * item.quantity, 0) || 0;
  const totalDiscount = totalOriginalPrice - totalFinalPrice;
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0) || 0;
  if (cartItems.length === 0) {
    return (
      <div className='cart-container'>
        <div className='cart-icon-addproduct'>
          <FaShoppingCart size={84} className='text-danger ms-4' />
          <h3 className='mt-2'>Cart is Empty</h3>
        </div>
      </div>
    );
  }

  return (
    <div className='cart-container-products bg-dark'>
      <div id="cart-container-cartitems">
        <div
          className="custom-scroll overflow-scroll rounded-4 bg-dark d-flex ms-5"
          style={{ width: "1200px", height: "auto" }}
        >
          <div className="custom-scroll overflow-scroll rounded-4 bg-dark" style={{ width: "650px", height: "400px" }}>
            {cartItems.map((item, index) => (
              <div key={index} className="card d-flex flex-row bg-dark mb-3 text-white">
                <div className="w-25 align-content-center">

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
                </div>
                <div className="card-body">
                  <p className="opacity-50">{item.title} {item.info}</p>
                  <FaTrash
                    size={15}
                    className='text-danger ms-4 trash'
                    title="Remove"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  />
                  <p className="card-text d-flex">
                    <IndianRupee size={15} color="#fbf6f6ff" className='iconrupee' />{item.finalPrice}
                    <span className="opacity-50 text-decoration-line-through ms-2 d-flex">
                      <IndianRupee size={15} color="#fbf6f6ff" className='iconrupee' />{item.originalPrice}
                    </span>
                  </p>

                  <div className="d-flex border border-secondary w-25 justify-content-between">
                    <button className="bg-secondary w-25 text-center" onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                    <div className="text-danger">{item.quantity}</div>
                    <button className="bg-secondary w-25 text-center" onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="card mb-3 p-5 text-white bg-dark" style={{ width: "500px" }}>
            <h5>Order Summary ({totalItems} items)</h5>

            <div className="d-flex flex-row g-0 mt-3">
              <div>
                <p className="opacity-50">Original Price</p>
                <p className="opacity-50">Discount</p>
                <p className="opacity-50">Delivery</p>
              </div>

              <div className="w-50 ms-5 ps-5">
                <div className="card-body">
                  <p className="card-title d-flex">
                    <IndianRupee size={15} color="#fbf6f6ff" className='iconrupee' /><span className='icon-price'>{totalOriginalPrice.toLocaleString()}</span>
                  </p>
                  <p className="card-text mt-3 text-success d-flex">
                    <b>- </b>
                    <IndianRupee size={15} color="#2f5717ff" className='iconrupee' /><span className='icon-price'>{totalDiscount.toLocaleString()}</span>
                  </p>
                  <p className="card-text mt-3 text-success">Free</p>
                </div>
              </div>
            </div>

            <hr />

            <div className="d-flex justify-content-between">
              <div className="price">
                <p>Total Price</p>
              </div>
              <div className="price-cartitems mt-2 me-5">
                <p className='d-flex'>
                  <IndianRupee size={25} color="#fbf6f6ff" className='iconrupee' /><span className='icon-price' style={{ marginRight: "70px" }}>{totalFinalPrice.toLocaleString()}</span>
                </p>
              </div>
            </div>

            <button className="bg-danger text-white rounded-3 p-2">Checkout</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
