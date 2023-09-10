import React from "react";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const ChefCard = ({ name, image, experience, recipeNumber, likes, link }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <LazyLoad offset={0}>
        <img src={image} alt={name} className="w-full h-auto rounded-lg mb-4" />
      </LazyLoad>
      <h4 className="text-gray-800 font-bold text-lg mb-2">{name}</h4>
      <p className="text-gray-600 mb-2">
        {experience} years of experience | {recipeNumber} recipes
      </p>
      <div className="flex justify-center mb-4">
        <span className="text-pink-500 font-bold">{likes}</span>
        <span className="ml-2">Likes</span>
      </div>
      <button
        onClick={() => navigate(`/view-recipe/${link}`)}
        className="bg-pink-500 hover:bg-pink-600 transition-all text-white font-semibold py-2 px-4 rounded"
      >
        View Recipes
      </button>
    </div>
  );
};

export default ChefCard;
