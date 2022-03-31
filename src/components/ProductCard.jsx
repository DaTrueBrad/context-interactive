import React, { useContext } from "react";
import { CartContext } from "../App";

function ProductCard({ product, isCart, index }) {
  const { cart, setCart } = useContext(CartContext);

  const clickHandler = async (value) => {
    if (isCart) {
      setCart((prevState) => {
        const newState = [...cart];
        newState.splice(index, 1);
        return newState;
      });
    } else {
      console.log("Not in the cart!");
      setCart([...cart, value]);
    }
  };

  return (
    <div className="product-card">
      <div className="upper-card">
        <h4>{product.name}</h4>
        <button onClick={() => clickHandler(product)}>
          {isCart ? "Remove" : "Add to Cart"}
        </button>
      </div>
      <p>{product.desc}</p>
    </div>
  );
}

export default ProductCard;
