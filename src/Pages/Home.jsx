import React from "react";
import { Banner, Category, FeaturedJob, Footer, Header } from "../Components";

const Home = () => {
  return (
    <div>
      <div className="bg-header">
        <div className="container mx-auto relative py-5 px-4 md:px-6 lg:px-8">
          <Header />
          <Banner />
        </div>
      </div>
      <div className="container mx-auto relative py-5 px-4 md:px-6 lg:px-8">
        <Category />
        <FeaturedJob />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
