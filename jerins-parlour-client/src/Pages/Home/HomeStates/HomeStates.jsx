import React from "react";
import image from "../../../assets/images/states.png";
const HomeStates = () => {
  return (
    <div className="hero py-12 bg-[#FFF8F5]">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="w-1/2 rounded-lg shadow-2xl" />
        <div className="ms-24">
          <div className="w-5/6 flex flex-col">
            <h1 className="text-4xl font-bold">
              Let us handle your screen{" "}
              <span className="text-primary">Professionally</span>.
            </h1>
            <p className="py-6 mt-8 mb-16">
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general ipsum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Purus commodo ipsum.
            </p>
            <div className="flex justify-between w-9/12">
              <div>
                <p className="text-primary text-4xl font-bold">500+</p>
                <p className="my-2 font-semibold">Happy Customer</p>
              </div>
              <div>
                <p className="text-primary text-4xl font-bold">16+</p>
                <p className="my-2 font-semibold">Total Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStates;
