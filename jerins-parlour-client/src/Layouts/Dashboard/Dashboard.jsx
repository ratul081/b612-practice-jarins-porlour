import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import { BsChatLeftDots } from "react-icons/bs";
import {
  FiGrid,
  FiHardDrive,
  FiPlus,
  FiShoppingCart,
  FiUserPlus,
} from "react-icons/fi";

const Dashboard = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-[#F4F7FC]">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto">
              <div className="flex flex-col items-center">
                <Link to="/">
                  <img className="w-36" src={logo} alt="avatar" />
                </Link>
              </div>
              <div className="flex flex-col justify-between flex-1 mt-16">
                <nav>
                  <>
                    <Link
                      to="/dashboard/book"
                      className="flex items-center px-4 py-2 text-gray-700 focus:bg-gray-100 rounded-lg">
                      <FiShoppingCart className="w-6 h-6"></FiShoppingCart>
                      <span className="mx-4 text-gray-500 font-medium">
                        Book
                      </span>
                    </Link>
                    <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                      <FiHardDrive className="w-6 h-6"></FiHardDrive>
                      <span className="mx-4 text-gray-500 font-medium">
                        Booking List
                      </span>
                    </Link>
                    <Link
                      to="/dashboard/review"
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                      <BsChatLeftDots className="w-6 h-6"></BsChatLeftDots>
                      <span className="mx-4 text-gray-500 font-medium">
                        Review
                      </span>
                    </Link>
                  </>
                  <>
                    <Link
                      to="/dashboard/order-list"
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                      <FiHardDrive className="w-6 h-6"></FiHardDrive>
                      <span className="mx-4 text-gray-500 font-medium">
                        Order List
                      </span>
                    </Link>
                    <Link
                      to="/dashboard/add-service"
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                      <FiPlus className="w-6 h-6"></FiPlus>
                      <span className="mx-4 text-gray-500 font-medium">
                        Add Service
                      </span>
                    </Link>
                    <Link
                      to="/dashboard/make-admin"
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                      <FiUserPlus className="w-6 h-6"></FiUserPlus>
                      <span className="mx-4 text-gray-500 font-medium">
                        Make admin
                      </span>
                    </Link>
                    <Link
                      to="/dashboard/manage-services"
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                      <FiGrid className="w-6 h-6"></FiGrid>
                      <span className="mx-4 text-gray-500 font-medium">
                        Manage Services
                      </span>
                    </Link>
                  </>
                </nav>
              </div>
            </aside>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
