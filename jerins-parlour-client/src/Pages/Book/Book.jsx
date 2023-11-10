import React from "react";
import creditCard from "../../assets/icons/credit-card 1.png";
import Paypal from "../../assets/icons/Paypal.png";
import DashboardNavbar from "../AdminPages/DashboardNavbar/DashboardNavbar";

const Book = () => {
  return (
    <>
      <DashboardNavbar>Book</DashboardNavbar>
      <div className="my-12 mx-9">
        <form className="w-1/2">
          <div className="space-y-4">
            <div className="relative">
              <input
                autocomplete="off"
                id="text"
                name="text"
                type="text"
                className="peer placeholder-transparent p-4 h-14 w-full  rounded-lg text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder=""
              />
              <label
                for="text"
                className="absolute left-5 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:font-semibold  peer-placeholder-shown:top-4 transition-all peer-focus:hidden peer-focus:semibold peer-focus:text-sm text-opacity-0">
                Name
              </label>
            </div>
            <div className="relative">
              <input
                autocomplete="off"
                id="text"
                name="text"
                type="text"
                className="peer placeholder-transparent p-4 h-14 w-full  rounded-lg text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder=""
              />
              <label
                for="text"
                className="absolute left-5 -top-3.5  text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:font-semibold  peer-placeholder-shown:top-4 transition-all peer-focus:hidden peer-focus:semibold peer-focus:text-sm text-opacity-0">
                Email
              </label>
            </div>
            <div className="relative">
              <input
                autocomplete="off"
                id="text"
                name="text"
                type="text"
                className="peer placeholder-transparent p-4 h-14 w-full  rounded-lg text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder=""
              />
              <label
                for="text"
                className="absolute  left-5 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:font-semibold  peer-placeholder-shown:top-4 transition-all peer-focus:hidden peer-focus:semibold peer-focus:text-sm text-opacity-0">
                Service name
              </label>
            </div>
            <div>
              <p>Pay with</p>
              <div className="flex gap-5 my-3">
                <div className="flex flex-row-reverse items-center">
                  <label className="label cursor-pointer">
                    <img
                      className="w-6 h-6 mx-2"
                      src={creditCard}
                      alt=""
                      srcset=""
                    />
                    Credit Card
                  </label>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-[#251D58]"
                    checked
                  />
                </div>
                <div className="flex flex-row-reverse items-center">
                  <label className="label cursor-pointer">
                    <img
                      className="w-6 h-6 mx-2"
                      src={Paypal}
                      alt=""
                      srcset=""
                    />
                    Paypal
                  </label>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-[#251D58]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Card Number"
              className="rounded-lg focus:outline-none p-4  bg-white w-full"
            />
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="MM/YY"
                className="rounded-lg focus:outline-none p-4 bg-white w-full"
              />
              <input
                type="text"
                placeholder="CVC"
                className="rounded-lg focus:outline-none p-4 bg-white w-full"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold">Your Service charged will be $1000</p>
            <input
              className="btn btn-primary px-12 my-4 normal-case"
              type="submit"
              value="Pay"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Book;
