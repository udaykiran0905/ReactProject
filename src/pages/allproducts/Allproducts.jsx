import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../contextAPI/Contex";
import { sortMenu, brandsMenu, categoryMenu } from "../../data/filterBarData";
import "../allproducts/Allproduct.css";
import Card from "../../components/card/card";
import Advantage from '../home/advantages/Advantage'
import Footer from "../../components/footer/Footer";

export default function Allproducts() {
  const products = useContext(ProductContext);

  const [brands, setBrands] = useState(brandsMenu);
  const [categories, setCategories] = useState(categoryMenu);
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [sort, setSort] = useState(1);
  const minPrice = Math.min(...products.map(p => p.finalPrice));
  const maxPrice = Math.max(...products.map(p => p.finalPrice));

  useEffect(() => {
    setPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  const handleBrandChange = (id) => {
    setBrands(prev =>
      prev.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleCategoryChange = (id) => {
    setCategories(prev =>
      prev.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const selectedBrands = brands.filter(b => b.checked).map(b => b.label);
  const selectedCategories = categories.filter(c => c.checked).map(c => c.label);
  let filteredProducts = products.filter(p => {
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(p.brand);
    const catMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
    const priceMatch = p.finalPrice >= priceRange[0] && p.finalPrice <= priceRange[1];
    return brandMatch && catMatch && priceMatch;
  });
  if (sort === 2) {
    filteredProducts = filteredProducts.filter(p => p.rateCount === 5);
  }
  if (sort === 3) {
    filteredProducts = filteredProducts.filter(p => p.rateCount === 5);
    filteredProducts.sort((a, b) => b.rateCount - a.rateCount);
  }
  if (sort === 4) filteredProducts.sort((a, b) => a.finalPrice - b.finalPrice);
  if (sort === 5) filteredProducts.sort((a, b) => b.finalPrice - a.finalPrice);

  return (
    < div className='bg-black'>
      <div className="filter-page">
        <aside className="sidebar">
          <h3>Sort By</h3>
          {sortMenu.map(item => (
            <label key={item.id}>
              <input
                type="radio"
                name="sort"
                checked={sort === item.id}
                onChange={() => setSort(item.id)}
              />
              {item.title}
            </label>
          ))}

          <h3>Filter By</h3>

          <h4>Brands</h4>
          {brands.map(brand => (
            <label key={brand.id}>
              <input
                type="checkbox"
                checked={brand.checked}
                onChange={() => handleBrandChange(brand.id)}
              />
              {brand.label}
            </label>
          ))}

          <h4>Category</h4>
          {categories.map(cat => (
            <label key={cat.id}>
              <input
                type="checkbox"
                checked={cat.checked}
                onChange={() => handleCategoryChange(cat.id)}
              />
              {cat.label}
            </label>
          ))}
          <h4>Price Range</h4>
          <div className="price-slider">
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={priceRange[0]}
              onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
              className="slider-min"
            />
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
              className="slider-max"
            />
            <div className="price-values">
              ₹{priceRange[0]} – ₹{priceRange[1]}
            </div>
          </div>
        </aside>

        <main className="products-area">
          {filteredProducts.length === 0 ? (
            <p className="no-products">No Products Found</p>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((item, i) => (
                <Card key={i} item={item} />
              ))}
            </div>
          )}
        </main>
      </div>
      <Advantage />
      <Footer />
    </div>
  );
}