import React from "react";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import { AiOutlineCloudUpload } from "react-icons/ai";

const AddService = () => {
  return (
    <>
      <DashboardNavbar>Make admin</DashboardNavbar>
      <form className="form-control my-10 mx-8">
        <div className=" p-9 bg-white rounded-2xl ">
          <div className=" grid grid-cols-2 gap-9">
            <div>
              <label className="label font-semibold">Service Title</label>
              <input
                type="text"
                placeholder="Please enter your email address"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label font-semibold">Image</label>
              <div className="flex items-center ">
                <label className="w-64 px-4 py-2 flex items-center gap-2 bg-[#FFEAF3] text-primary border-primary font-semibold rounded-lg tracking-wide border border-blue cursor-pointer">
                  <AiOutlineCloudUpload className="w-6 h-6"></AiOutlineCloudUpload>
                  Upload image
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>
            <div>
              <label className="label font-semibold">Description</label>
              <textarea
                placeholder="Description"
                className="textarea textarea-bordered w-full"
                rows={5}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <input
            className="btn btn-primary px-10 m-4 normal-case"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </>
  );
};

export default AddService;
