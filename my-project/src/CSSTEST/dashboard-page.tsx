import React from "react";

const DashboardPage = () => {
  const users = [
    {
      id: 1,
      username: 'Tinle',
      email: '  Tinle@example.com',
      phone: '123-456-7890',
      status: 'Active',
      createDate: '2022-01-01',
      updateDate: '2022-02-01',
    },
    {
      id: 2,
      username: 'Letin',
      email: 'Letin@example.com',
      phone: '987-654-3210',
      status: 'Inactive',
      createDate: '2022-03-01',
      updateDate: '2022-04-01',
    },
    {
      id: 3,
      username: 'Trungtin',
      email: 'Trungtin@example.com',
      phone: '647-164-9674',
      status: 'Inactive',
      createDate: '2022-03-01',
      updateDate: '2022-04-01',
    },
    {
      id: 4,
      username: 'Tintrung',
      email: 'Tintrung@example.com',
      phone: '945-133-4679',
      status: 'Active',
      createDate: '2022-03-01',
      updateDate: '2022-04-01',
    },
    // Thêm người dùng khác nếu cần
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-0.9/3 bg-white-500 p-6 text-red-700 border-r border-black-800">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

        {/* Danh mục chính */}
        <ul className="mb-4">
          <li className="mb-2">User Details</li>
          <ul className="pl-4">
            <li className="mb-2 bg-red-600 text-white border-r rounded">Admin</li>
          </ul>
          <li className="mb-2 ">Executive Details</li>
          <ul className="pl-4">
            <li className="mb-2 bg-red-600 text-white border-r rounded">Executive</li>
          </ul>
        </ul>

         {/*nhập thêm nội dung sidebar ở đây*/}
      </div>

      {/* Content */}
      <div className="w-2.2/3 p-6 border-l border-gray-700">
        <h2 className="text-2xl font-bold mb-4">User List</h2>
        {/* danh sách user */}
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300">ID</th>
              <th className="border border-gray-300">Username</th>
              <th className="border border-gray-300">Email</th>
              <th className="border border-gray-300">Phone</th>
              <th className="border border-gray-300">Status</th>
              <th className="border border-gray-300">Create Date</th>
              <th className="border border-gray-300">Update Date</th>
              <th className="border border-gray-300">Modify</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-300">{user.id}</td>
                <td className="border border-gray-300">{user.username}</td>
                <td className="border border-gray-300">{user.email}</td>
                <td className="border border-gray-300">{user.phone}</td>
                <td className="border border-gray-300">{user.status}</td>
                <td className="border border-gray-300">{user.createDate}</td>
                <td className="border border-gray-300">{user.updateDate}</td>
                <td className="border border-gray-300">Modify</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
