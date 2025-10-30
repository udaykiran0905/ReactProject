import React from 'react'
import '../section/Navbar.css'

export default function Navbar({ setSelectedCategory, selectedCategory }) {
  const categories = ['All', 'Headphones', 'Earbuds', 'Earphones', 'Neckbands']

  return (
    <div className='navbar-category'>
      <h3 className="text-center mt-3">Top Products</h3>
      <div className="p-4 ps-5">
        <ul className="d-flex justify-content-around ps-5 pe-5 list-unstyled">
          {categories.map((cat) => (
            <li
              key={cat}
              className={`item_div ps-3 pe-3 ${selectedCategory === cat ? 'bg-danger text-white' : ''}`}
              onClick={() => setSelectedCategory(cat)}
              style={{ cursor: 'pointer' }}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

