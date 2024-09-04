import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Contexts/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto px-4 py-8  ">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      <ul className="list-disc flex flex-col gap-3">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between flex-col md:flex-row  p-4 rounded-md   shadow-sm bg-gray-50"
          >
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg mr-2"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
            <div className="flex flex-col  gap-2">
              <p className="text-lg font-bold text-blue-500 mt-2">
                ${item.price * item.quantity}
              </p>
              <input
                type="number"
                className="bg-transparent outline-blue-500 border-1 rounded-md border-blue-500 w-1/2"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
              />
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <p className="text-lg font-bold text-blue-500">
          Total: $
          {cartItems.reduce(
            (total, item) => Math.ceil(total + item.price * item.quantity),
            0
          )}
        </p>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
