import React, { useState, useEffect } from "react";
import Container from "../shared/Container";
import ChefCard from "./ChefCard";

const OurChef = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://cuisine-masters.vercel.app/api/v1/chef"
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <div className="py-8 mt-8">
      <div className="text-center">
        <h3 className="uppercase text-pink-500">What We Serve</h3>
        <h2 className="text-gray-800 text-2xl font-bold md:text-3xl lg:text-4xl mt-1">
          Our Awesome Chef
        </h2>
      </div>
      <div className="mt-8 text-center">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item) => (
              <ChefCard
                key={item.id}
                link={item.id}
                name={item.chefName}
                image={item.chefImage}
                experience={item.experience}
                recipeNumber={item.recipeNumber}
                likes={item.likes}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OurChef;
