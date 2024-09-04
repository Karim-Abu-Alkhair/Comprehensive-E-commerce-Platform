import React from "react";
import { useCart } from "../Contexts/CartContext";

const OrderHistory = () => {
  const { orders } = useCart();

  return (
    <div className="container mx-auto px-4 pb-8 pt-24">
      <h1 className="text-3xl font-bold mb-4">Order History</h1>
      <ul className="space-y-4">
        {orders.map((order, i) => (
          <li key={order.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold">Order #{i + 1}</h2>
            <p className="text-gray-600">Total: ${order.total}</p>
            <h3 className="text-md font-semibold mt-2">Items:</h3>
            <ul>
              {order.items.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col md:flex-row  justify-between"
                >
                  <span>{item.title}</span>
                  <img src={item.image} alt={item.title} className="w-1/12" />
                  <span>
                    ${item.price} x {item.quantity}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 mt-2">
              Shipping to: {order.user.address}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
