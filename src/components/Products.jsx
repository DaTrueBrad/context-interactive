import React from "react";
import data from "../data";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <div className="sub-page">
      <h1>Products</h1>
      <div className="product-container">
        {data.map((product, index) => {
          return (
            <ProductCard product={product} cart={false} index={index}/>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
