import React from "react";
import { Link } from "react-router-dom";
import { HiFaceFrown } from "react-icons/hi2";
const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-2">Oops!</h1>
      <HiFaceFrown className="h-52 w-52 text-pink-500" />
      <h2 className="text-2xl font-semibold text-gray-600 mb-4">
        We couldn't find the page you were looking for.
      </h2>
      <p className="text-gray-500 mb-8">
        Sorry about that. Please check the URL or go back to the homepage.
      </p>
      <Link
        to="/"
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-pink active:bg-pink-800"
      >
        Go back to homepage
      </Link>
    </div>
  );
};

export default NotFound;
