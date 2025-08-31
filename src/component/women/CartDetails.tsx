import React, { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

import product1 from "../../assets/images/WomenProductImages/womenproduct1.png";
import product2 from "../../assets/images/WomenProductImages/womenproduct2.png";
import product3 from "../../assets/images/WomenProductImages/womenproduct3.png";

type CartItem = {
  id: number;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  shipping: number | "FREE";
  image: string;
};

const initialCart: CartItem[] = [
  {
    id: 1,
    name: "Blue Flower Print Crop Top",
    color: "Yellow",
    size: "M",
    price: 29,
    quantity: 1,
    shipping: "FREE",
    image: product1, 
  },
  {
    id: 2,
    name: "Lavender Hoodie",
    color: "Lavender",
    size: "XXL",
    price: 119,
    quantity: 2,
    shipping: "FREE",
    image: product2, 
  },
  {
    id: 3,
    name: "Black Sweatshirt",
    color: "Black",
    size: "XXL",
    price: 123,
    quantity: 2,
    shipping: 5,
    image: product3, 
  },
];

const CartDetails: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingTotal = cart.reduce(
    (acc, item) => acc + (item.shipping === "FREE" ? 0 : item.shipping),
    0
  );
  const total = subtotal + shippingTotal;

  return (
    <div className="container mx-auto px-4 pt-24 pb-10">
  
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 uppercase text-sm text-gray-600">
            <tr>
              <th className="p-4">Product Details</th>
              <th className="p-4">Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Shipping</th>
              <th className="p-4">Subtotal</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border-b">
           
                <td className="p-4 flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      Color: {item.color} | Size: {item.size}
                    </p>
                  </div>
                </td>


                <td className="p-4">${item.price.toFixed(2)}</td>

                <td className="p-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="border px-2 py-1 rounded"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="border px-2 py-1 rounded"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </td>

                <td className="p-4">
                  {item.shipping === "FREE" ? "FREE" : `$${item.shipping}`}
                </td>

                <td className="p-4 font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>

                <td className="p-4">
                  <button onClick={() => removeItem(item.id)}>
                    <Trash2 className="h-5 w-5 text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <div className="border p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Discount Codes</h3>
          <p className="text-sm text-gray-500 mb-3">
            Enter your coupon code if you have one
          </p>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border p-2 rounded w-full"
            />
            <button className="bg-purple-600 text-white px-4 py-2 rounded">
              Apply Coupon
            </button>
          </div>
          <button className="mt-4 text-purple-600 underline">
            Continue Shopping
          </button>
        </div>

        <div className="border p-6 rounded-lg">
          <div className="flex justify-between mb-3">
            <span>Sub Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-3">
            <span>Shipping</span>
            <span>{shippingTotal === 0 ? "FREE" : `$${shippingTotal}`}</span>
          </div>
          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Grand Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-purple-600 text-white py-3 rounded">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
