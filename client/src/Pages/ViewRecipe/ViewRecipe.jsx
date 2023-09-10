import React, { useEffect, useState } from "react";
import { Container, Loader, Recipes } from "../../Components";
import { useParams } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const ViewRecipe = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      const response = await fetch(
        `https://cuisine-masters.vercel.app/api/v1/chef/${id}`
      );
      const data = await response.json();
      setData(data);
      setRecipes(data?.recipe);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {!loading && (
        <div>
          <Container>
            <div className="flex items-center justify-center flex-col">
              <LazyLoad offset={0} className="w-full">
                <img
                  src={data?.bannerImage}
                  alt={data?.chefDescription}
                  className="w-full h-64 object-cover rounded"
                />
              </LazyLoad>
              <div className="absolute bottom-0 ">
                <img
                  src={data?.chefImage}
                  alt={data?.chefName}
                  className="w-full h-40 object-cover shadow-sm border-[5px] border-white rounded-full"
                />
              </div>
            </div>
          </Container>
          <Container>
            <div className="flex justify-center text-center flex-col items-center">
              <h1 className="text-pink-500 font-bold text-xl md:text-2xl lg:text-3xl">
                {data?.chefName}
              </h1>
              <h3 className="text-gray-600 text-base mb-2">
                {data?.chefTitle}
              </h3>
              <p className="text-gray-600 text-sm max-w-sm mb-4">
                {data?.chefDescription}
              </p>
              <div className="flex justify-between items-center w-full max-w-lg border-t border-b border-gray-300 py-4">
                <div className="text-center">
                  <p className="text-gray-900 font-bold text-lg">
                    {data?.likes}
                  </p>
                  <p className="text-gray-600 text-sm">Likes</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-900 font-bold text-lg">
                    {data?.recipe?.length}
                  </p>
                  <p className="text-gray-600 text-sm">Recipes</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-900 font-bold text-lg">
                    {data?.experience}
                  </p>
                  <p className="text-gray-600 text-sm">Years of experience</p>
                </div>
              </div>
            </div>
          </Container>
          <Container>
            <div className="mt-8">
              <h1 className="text-gray-800 font-bold text-xl">
                This Chef Recipie List
              </h1>

              <div className="mt-10 flex flex-col gap-8">
                {recipes?.map((item, index) => (
                  <Recipes key={index} recipe={item} />
                ))}
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default ViewRecipe;
