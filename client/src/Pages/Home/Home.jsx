import React, { useEffect } from "react";
import Container from "../../Components/shared/Container";
import { Banner, Feature, Newsletter, OurChef } from "../../Components";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Container>
        <Banner />
        <Feature />
        <OurChef />
        <Newsletter />
      </Container>
    </div>
  );
};

export default Home;
