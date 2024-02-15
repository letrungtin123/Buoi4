import { getUserById, updateUser } from "../apis/users.api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Iusers {
  id: number;
  username: string;
  age: number;
  address: string;
}

const EditProductPage = () => {
  const router = useNavigate();
  // useParams: lấy params từ url
  const { id: idParam } = useParams();

  const [userDetail, setUserDetail] = useState<Omit<Iusers, "id">>({
    username: "",
    address: "",
    age: 0,
  });

  useEffect(() => {
    if (idParam) {
      const fetchData = async () => {
        try {
          const response = await getUserById(idParam);
          setUserDetail(response.data);
        } catch (error) {
          console.log("fetchData ~ error:", error);
        }
      };
      fetchData();
    }
  }, [idParam]);

  const handleUsernameUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setUserDetail({
      ...userDetail,
      username: value,
    });
  };
  const handleAddressUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setUserDetail({
      ...userDetail,
      address: value,
    });
  };
  const handleAgeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.valueAsNumber;
    setUserDetail({
      ...userDetail,
      age: value,
    });
  };

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // omit: bỏ đi 1 thuộc tính nào đó của 1 object
      const newUser: Iusers = {
        id: Number(idParam),
        username: userDetail.username,
        address: userDetail.address,
        age: userDetail.age,
      };
      console.log("handleSubmitForm ~ newUser:", newUser);
      const response = await updateUser(newUser);
      console.log(" handleSubmitForm ~ response:", response);
      // sau khi gửi dữ liệu thành công thì sẽ chuyển hướng về trang list-product
      router("/");
    } catch (error) {
      console.log(" handleSubmitForm ~ error:", error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-0.5/3 bg-white p-6 text-red-700 border-r border-black-800">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
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
        {/*Thêm nội dung sidebar ở đây nếu cần*/}
      </div>
      {/* Content */}
      <div className="w-2.2/3 p-6 border-l border-gray-700">
        <h2 className="text-2xl font-bold mb-4">Edit User</h2>
        <form
          onSubmit={(event) => handleSubmitForm(event)}
        >
          <div>
            <p>Name: </p>
            <input
              type="text"
              className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
              placeholder="username"
              value={userDetail.username}
              onChange={(event) => handleUsernameUser(event)}
            />
          </div>
          <div>
            <p>Age:</p>
            <input
              type="number"
              className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
              placeholder="age user"
              value={userDetail.age}
              onChange={(event) => handleAgeUser(event)}
            />
          </div>
          <div>
            <p>Address:</p>
            <input
              type="text"
              className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
              placeholder="address user"
              value={userDetail.address}
              onChange={(event) => handleAddressUser(event)}
            />
          </div>
          <button className="bg-red-500 text-white p-2 w-full rounded-lg hover:bg-red-800">
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProductPage;

// const EditProductPage = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center ">
//       <div className="bg-white p-8 shadow-md rounded-md w-96">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Đăng Nhập</h2>
//         <form className="space-y-4">
//           <div>
//             <label htmlFor="username" className="block text-sm font-medium text-gray-600">
//               Tên đăng nhập
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-600">
//               Mật khẩu
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-800 focus:outline-none"
//           >
//             Đăng Nhập
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditProductPage;
