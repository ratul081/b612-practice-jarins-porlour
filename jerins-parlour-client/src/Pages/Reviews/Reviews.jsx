import React from "react";
import DashboardNavbar from "../AdminPages/DashboardNavbar/DashboardNavbar";

const Reviews = () => {
  return (
    <div>
      <DashboardNavbar>Review</DashboardNavbar>
      <div className="grid grid-cols-2">
        <form className="my-14 ms-12 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Company's name, Designation"
            className="input input-bordered w-full"
          />
          <textarea
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            rows={5}
          />
          <input
            type="submit"
            className="btn btn-primary px-14 py-2 normal-case"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Reviews;
