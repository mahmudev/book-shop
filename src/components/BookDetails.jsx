import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import Cart from "./Cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const navigation = useNavigation();
  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem("bookmarks")) || []
  );
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }
  const bookData = useLoaderData();
  const [fold, setFold] = useState(true);
  // console.log(bookData)
  const { image, title, desc, authors, publisher, year, rating, url, price } =
    bookData;
  const addToBookmark = (data) => {
    const currentBookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];

    // Check if product already exists in bookmarks
    if (currentBookmarks.some((bookmark) => bookmark.isbn10 === data.isbn10)) {
      toast("already added to cart", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    const updatedBookmarks = [...currentBookmarks, data];
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    setBookmarks(updatedBookmarks);
    console.log(data.title);
  };

  const removeFromBookmark = (product) => {
    const currentBookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];
    // Find the index of the bookmark to remove
    const indexToRemove = currentBookmarks.findIndex(
      (bookmark) => bookmark.isbn10 === product.isbn10
    );

    if (indexToRemove === -1) {
      return;
    }

    // Create a new array without the bookmark to remove
    const updatedBookmarks = [
      ...currentBookmarks.slice(0, indexToRemove),
      ...currentBookmarks.slice(indexToRemove + 1),
    ];

    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    setBookmarks(updatedBookmarks);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="w-full lg:w-3/4 pt-10">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
          {/* Image Container */}
          <div className=" lg:w-1/2 h-full">
            <img
              src={image}
              alt="book cover"
              className="object-cover w-full  lg:h-full"
            />
          </div>
          {/* Details Container */}
          <div className=" p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              <p className="badge">Brand new</p>
            </div>
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
              {title}
            </h5>
            <p className=" text-gray-900">
              Authors: {authors.substring(0, 50)}
            </p>
            <p className=" text-gray-900">Publisher: {publisher}</p>
            <p className=" text-gray-900">Year: {year}</p>
            <p className="mb-5 text-gray-900">Rating: {rating}</p>
            {fold ? (
              <>
                <p className=" text-gray-500">{desc.substring(0, 100)}.....</p>
                <span
                  className="cursor-pointer text-blue-600 "
                  onClick={() => setFold(!fold)}
                >
                  Read More
                </span>
              </>
            ) : (
              <>
                <p className=" text-gray-900">{desc}.....</p>
                <span
                  className="cursor-pointer text-blue-600 "
                  onClick={() => setFold(!fold)}
                >
                  Read Less
                </span>
              </>
            )}

            <div className="flex gap-5 mt-8 items-center">
              <a
                onClick={() => addToBookmark(bookData)}
                target="_blank"
                className="inline-flex items-center h-12 px-6 mb-3 font-medium text-white transition duration-200 rounded shadow-md  md:mb-0 bg-blue-400 hover:bg-blue-700"
              >
                Buy Now
              </a>
              <button
                onClick={() => addToBookmark(bookData)}
                class="inline-flex items-center h-12 px-6 mb-3 font-medium text-white transition duration-200 rounded shadow-md  md:mb-0 bg-[#FF9900] shadow hover:bg-[#995C00]"
              >
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
                <span>Add to cart</span>
              </button>
              <p className="items-center font-extrabold text-gray-600 ">
                Price: {price}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/4 p-10">
        <Cart
          key={bookData.isbn13}
          removeFromBookmark={removeFromBookmark}
          bookmarks={bookmarks}
        ></Cart>
      </div>
    </div>
  );
};

export default BookDetails;
