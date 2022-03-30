import React from 'react'

function ProductCard({product, cart, index}) {
  return (
    <div className="product-card">
      <div className="upper-card">
        <h4>{product.name}</h4>
        <button onClick={() => console.log(index)}>{cart ? "Remove" : "Add to Cart"}</button>
      </div>
      <p>{product.desc}</p>
    </div>
)
}

export default ProductCard