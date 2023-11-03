import React from "react";
import banner from "../../../assets/images/banner.png";
const HomeBanner = () => {
  return (
    <div className="hero bg-[#FFF8F5] px-14">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} className="w-1/3 rounded-lg " />
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">
            BEAUTY SALON <br />
            FOR EVERY WOMEN
          </h1>
          <p className="py-6 w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat
          </p>
          <button className="btn btn-primary normal-case px-8">
            Get an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
