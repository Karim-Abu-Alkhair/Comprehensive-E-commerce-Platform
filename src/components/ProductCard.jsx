import React from "react";
import { useCart } from "../Contexts/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-2"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">
        {product.title.split(" ").slice(0, 3).join(" ") + "..."}
      </p>
      <p className="text-lg font-bold text-blue-500 mt-2">${product.price}</p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
