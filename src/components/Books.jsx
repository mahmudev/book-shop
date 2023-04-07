import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Book from "./Book";
import LoadingSpinner from "./LoadingSpinner";

const Books = () => {
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const { books: initialBooks } = useLoaderData();
  const [books, setBooks] = useState(initialBooks);
  const [error, setError] = useState(null); // Define error state

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!query) { // Check if search query is empty
      setError("Please enter a search query."); // Set custom error message
      return; // Return early 
    }
  
    setSearching(true);
    const searchEndpoint = `https://api.itbook.store/1.0/search/${query}`;
    const response = await fetch(searchEndpoint);
    const { books: searchedBooks } = await response.json();
    setBooks(searchedBooks);
    setSearching(false);
  };

  if (!initialBooks) {
    return <LoadingSpinner />;
  }

  return (
    <div className="my-container">
      <form onSubmit={handleSubmit} className="flex justify-center mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search books"
          className="block border-b-2 border-blue-500 w-full lg:w-1/2 px-4 py-2 text-lg focus:border-blue-600 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>} {/* Render error message */}
      {searching && <LoadingSpinner />}
      {!searching && books.length === 0 && <p>No results found.</p>}
      {!searching && books.length > 0 && (
        <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
          {books.map((book) => (
            <Book key={book.isbn13} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Books;
