import React from "react";
import { Link } from 'react-router-dom'

const Cart = (props) => {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

  // calculate subtotal
let subtotal = 0;

for (let i = 0; i < bookmarks.length; i++) {
  let price = parseFloat(bookmarks[i].price.replace("$", ""));
  subtotal += price;
}

  // calculate total with VAT
  const VAT = 0.07; // 7% VAT
  const total = subtotal + bookmarks.length * 4.99;
  const totalWithVAT = total * (1 + VAT);

  return (
    <div className="sticky top-0">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6  md:space-x-6 xl:px-0">
        <div className="rounded-lg">
          {bookmarks.map((bookmark) => (
            <div className="justify-between mb-2 rounded-lg bg-white p-3 shadow-md sm:flex sm:justify-start">
              <img
                src={bookmark.image}
                alt="product-image"
                className="rounded-lg sm:w-20 sm:h-20"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-md font-bold text-gray-900">
                    {bookmark.title}
                  </h2>
                  <p className="mb-1 text-md font-bold">
                   Price: {bookmark.price} USD
                  </p>
                </div>

                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      onClick={() => props.removeFromBookmark(bookmark)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-2 h-full rounded-lg border bg-white p-6 shadow-md">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">{subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$12.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">
                  ${totalWithVAT.toFixed(2)} USD
                </p>
                <p className="text-sm text-gray-700">including VAT (7%)</p>
              </div>
            </div>
            <Link to={"/checkout"}>
            <button class="flex w-full items-center justify-center gap-2 px-4 py-2 text-black bg-[#FF9900] shadow hover:bg-[#995C00] rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span> Check out</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
