import React, { useEffect, useState, useRef } from "react";
import ProductSearch from "./ProductSearch";

function GoldProducts() {
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const scrollRef = useRef();

  // Load categories (carousel)
  useEffect(() => {
    fetch("http://localhost:5000/api/categoryGroup")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // Handle search result
  const handleSearchResult = (data) => {
    setFilteredProducts(data);
  };

  return (
    <div className="px-lg-5">

      {/* 🔎 SEARCH COMPONENT */}
      <ProductSearch onSearchResult={handleSearchResult} />

      {/* 🎯 FILTERED PRODUCT CARDS */}
      <div className="row mt-4">
        {filteredProducts.map((item, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card shadow-sm">
              <img
                src={`data:image/jpeg;base64,${item.ImageBase64}`}
                className="card-img-top"
                alt="product"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h6>{item.SubProName}</h6>
                <p>NetWt: {item.NetWt}</p>
                <small>Tag: {item.TagNo}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔽 YOUR EXISTING CATEGORY CAROUSEL BELOW */}
      <div className="position-relative mt-5">
        <div className="carousel-wrapper p-lg-3" ref={scrollRef}>
          {categories.map((item, i) => (
            <div key={i} className="product-pill">
              <span className="product-text">{item.Catname}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default GoldProducts;