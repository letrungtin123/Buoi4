import React from "react";

const AdminEditPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-0.9/3 bg-white-500 p-6 text-red-700 border-r border-black-800">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

        {/* Danh mục chính */}
        <ul className="mb-4">
          <li className="mb-2">User Details</li>
          <ul className="pl-4">
            <li className="mb-2 bg-red-600 text-white border-r rounded">
              Admin
            </li>
          </ul>
          <li className="mb-2 ">Executive Details</li>
          <ul className="pl-4">
            <li className="mb-2 bg-red-600 text-white border-r rounded">
              Executive
            </li>
          </ul>
        </ul>

        {/*nhập thêm nội dung sidebar ở đây*/}
      </div>

      {/* Content */}
      <div className="w-2.2/3 p-6 border-l border-gray-700">
        <h2 className="text-2xl font-bold mb-4">Edit User</h2>
        <form>
          <div>
            <p>Name: </p>
            <input
              type="text"
              className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
              placeholder="user name"
            />
          </div>
          <div>
            <p>Mobile Number</p>
            <input
              type="text"
              className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
              placeholder="Mobile Number"
            />
          </div>
          <div>
            <p>Email Address</p>
            <input
              type="text"
              className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
              placeholder="Email Address"
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type="text"
              className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
              placeholder="Password"
            />
          </div>
          <button className="bg-red-500 text-white p-2 w-full rounded-lg hover:bg-red-950">
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminEditPage;
