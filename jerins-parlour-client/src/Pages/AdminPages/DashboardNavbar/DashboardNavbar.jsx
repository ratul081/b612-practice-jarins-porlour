import React from "react";

const DashboardNavbar = ({ children }) => {
  


  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 ms-10">
        <h1 className="text-2xl">{children}</h1>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            {/* <div className="w-10 rounded-full">
              <img
                src="https://i.ibb.co/wc2gQcw/icon.jpg
https://i.ibb.co/g9pmTd1/Pfp-27.jpg"
              />
            </div> */}
            <div className="w-44 rounded-full">
              <img src="https://i.ibb.co/g9pmTd1/Pfp-27.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
