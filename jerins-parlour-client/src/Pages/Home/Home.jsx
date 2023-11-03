import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeServices from "./HomeServices/HomeServices";
import Testimonial from "../Shared/Testimonial/Testimonial";
import HomeStates from "./HomeStates/HomeStates";
import ContactUs from "../Shared/ContactUs/ContactUs";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeServices />
      <HomeStates />
      <Testimonial />
      <ContactUs />
    </>
  );
};

export default Home;
