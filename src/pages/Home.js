import React from 'react';
import Banner from "../components/banner";
import FeaturesItems from "../components/Feature/FeaturesItems";

const Home = () => {
  return (
    <div>
        <Banner title="This is Titan" subtitle="Your online fashion destination "/>
        <FeaturesItems />
    </div>
  );
}

export default Home;
