import React from "react";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";

const OrderList = () => {
  return (
    <>
      <DashboardNavbar>Order List</DashboardNavbar>
      <div>
        <div className="m-5 bg-white rounded-xl">
          <div className="overflow-x-auto p-6">
            <table className="table text-lg font-semibold">
              {/* head */}
              <thead className="bg-base-200 rounded-3xl text-lg ">
                <tr>
                  <th>Name</th>
                  <th>Email ID</th>
                  <th>Service</th>
                  <th>Pay With</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {[...Array(3).keys()].map((number, i) => (
                  <tr key={i}>
                    <th>Ani</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                    <td>
                      <select
                        defaultValue="pending"
                        className="p-4 text-pink-900">
                        <option>Pending</option>
                        <option>On going</option>
                        <option>Done</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderList;
