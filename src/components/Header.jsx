import React from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartTotalItems } from '../rtk_store/Selector';  
import '../components/Header.css';

export default function Header({ setSearch, setShowPreview }) {
  const cartItemCount = useSelector(selectCartTotalItems);

  return (
    <div className="d-flex justify-content-between bg-black text-white p-2 header-component">
      <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>
        <h2 className="ms-3">Tech-Shop</h2>
      </Link>

      <div className="d-flex pt-3 justify-content-evenly me-5 align-items-center">
        <FaSearch
          title="Search"
          className="me-4"
          style={{ cursor: 'pointer' }}
          onClick={() => setSearch(true)}
        />

        <Link to="/cart" className="text-white position-relative">
          <FaShoppingCart title="Cart" className="me-4" />
          
          {cartItemCount > 0 && (
            <sup className="badge rounded-circle bg-danger cart-sup-icon">
              {cartItemCount}
            </sup>
          )}
        </Link>

        <div
          onMouseEnter={() => setShowPreview(true)}
          style={{ cursor: 'pointer', display: 'inline-block' }}
        >
          <FaUser title="User" className="me-4" />
        </div>
      </div>
    </div>
  );
}