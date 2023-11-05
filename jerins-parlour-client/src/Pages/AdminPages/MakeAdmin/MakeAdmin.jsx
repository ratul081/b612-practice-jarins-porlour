import React from "react";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";

const MakeAdmin = () => {
  return (
    <>
      <DashboardNavbar>Make admin</DashboardNavbar>
      <div className="my-10 mx-8 p-9 h-80 bg-white rounded-2xl ">
        <form className="form-control w-3/5">
          <label className="label font-semibold">Email</label>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Please enter your email address"
              className="input input-bordered w-full"
            />
            <input
              className="btn btn-primary px-10 normal-case"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default MakeAdmin;
