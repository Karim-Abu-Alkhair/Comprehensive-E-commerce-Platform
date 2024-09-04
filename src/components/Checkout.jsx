import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Contexts/CartContext";

const Checkout = () => {
  const { cartItems, clearCart, addOrder } = useCart();
  const navigate = useNavigate();

  const orders = cartItems;

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      address: Yup.string().required("Address is required"),
      phone: Yup.string().required("Phone number is required"),
    }),
    onSubmit: (values) => {
      const newOrder = {
        id: Date.now(),
        user: values,
        items: orders,
        total: cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
      };

      addOrder(newOrder);

      clearCart();

      navigate("/order-history");
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="mt-1 block p-2 w-full border-gray-300 rounded-md shadow-sm"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500">{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="address" className="block text-lg font-medium">
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm"
            {...formik.getFieldProps("address")}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="text-red-500">{formik.errors.address}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="phone" className="block text-lg font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            className="mt-1 block p-2 w-full border-gray-300 rounded-md shadow-sm"
            {...formik.getFieldProps("phone")}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500">{formik.errors.phone}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Complete Purchase
        </button>
      </form>
    </div>
  );
};

export default Checkout;
