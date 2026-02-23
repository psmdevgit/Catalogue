import React, { useEffect, useState } from "react";

function ProductSearch({ onSearchResult }) {
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [fromWt, setFromWt] = useState("");
  const [toWt, setToWt] = useState("");
  

  useEffect(() => {
    fetch("http://localhost:5000/api/subProducts")
      .then((res) => res.json())
      .then((data) => setProductList(data));
  }, []);

  const handleSearch = async () => {
    const res = await fetch(
      `http://localhost:5000/api/goldProducts/search?product=${selectedProduct}&fromWt=${fromWt}&toWt=${toWt}`
    );
    if (!res.ok) {
  throw new Error("API failed");
}


    const data = await res.json();
    onSearchResult(data);
  };

  return (
    <div className="d-flex gap-3 align-items-center">

      <select
        className="form-control"
        value={selectedProduct}
        onChange={(e) => setSelectedProduct(e.target.value)}
      >
        <option value="">All Products</option>
        {productList.map((item, index) => (
          <option key={index} value={item.SubProName}>
            {item.SubProName}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="From Weight"
        className="form-control"
        value={fromWt}
        onChange={(e) => setFromWt(e.target.value)}
      />

      <input
        type="number"
        placeholder="To Weight"
        className="form-control"
        value={toWt}
        onChange={(e) => setToWt(e.target.value)}
      />

      <button className="btn btn-dark" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default ProductSearch;