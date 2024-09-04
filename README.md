# E-Commerce React Application

This project is a simple e-commerce platform built with React, featuring a shopping cart, checkout process, and order history. The application uses Context API for state management and localStorage for data persistence.

## Project Structure

### Components

- **Cart**: Displays the items in the shopping cart and allows users to remove items, update quantities, and proceed to checkout.
- **Checkout**: Handles the checkout process where users input their details, and upon form submission, the order is stored and the cart is cleared.
- **OrderHistory**: Displays the user's past orders with details on each order's items and shipping information.
- **Loader**: A loading spinner component used during suspense fallback.
- **ProductCard**: Displays individual product details and allows users to add the product to the cart.
- **Products**: Displays a grid of products with filtering and sorting options.
- **Layout**: A wrapper component that includes navigation and suspense handling for the application.
- **Navigation**: Contains the navigation menu with links to home, cart, and order history.

### Context

- **CartContext**: Provides the cart state and functions to add, remove, update, and clear items in the cart. It also handles storing orders and persists data using `localStorage`.

### Pages

- **Cart Page**: Shows the contents of the cart and allows users to proceed to checkout.
- **Checkout Page**: Handles the form for user details and processes the order.
- **OrderHistory Page**: Lists all past orders made by the user.
- **Products Page**: Displays the list of products with the ability to filter by category and sort by price.

### Index

- **index.js**: The entry point of the application. Wraps the application with `CartProvider` for state management and includes `react-hot-toast` for notifications.

## Installation

1. Clone the repository.
2. Run `npm install` to install the required dependencies.
3. Run `npm start` to start the development server.

## Usage

- **Adding Products to Cart**: Browse products on the homepage, and click "Add to Cart" on any product to add it to your cart.
- **View Cart**: Navigate to the cart page to view items in your cart.
- **Checkout**: On the cart page, click "Proceed to Checkout" to fill out your shipping details and complete the purchase.
- **Order History**: After completing a purchase, view your order history to see past orders.

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **React Router DOM**: Used for routing in the application.
- **Formik**: Form handling in React.
- **Yup**: Schema validation for Formik forms.
- **React Hot Toast**: Toast notifications for user feedback.

## Notes

- The application uses `localStorage` to persist cart items and orders across page reloads.
- The toast notifications provide feedback when an item is added to the cart.
