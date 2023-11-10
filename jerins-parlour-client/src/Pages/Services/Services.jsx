import React from "react";
import DashboardNavbar from "../AdminPages/DashboardNavbar/DashboardNavbar";
// import antiAge2 from "../../assets/icons/Group 1374.png";
import antiAge from "../../assets/icons/Group 1373.png";

const Services = () => {
  return (
    <div>
      <DashboardNavbar>Service list</DashboardNavbar>
      <div className="grid grid-cols-2 my-11 gap-9 mx-8">
        {[...Array(2).keys()].map((number, i) => (
          <div key={i} className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title flex justify-between">
                <img
                  className="w-20"
                  src={antiAge}
                  alt=""
                />
                <button className="bg-[#FFE3E3] px-4 py-2 rounded text-[#FF4545]">
                  Pending
                </button>
              </h2>
              <p>Anti Age Face Treatment</p>
              <div className="card-actions">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
