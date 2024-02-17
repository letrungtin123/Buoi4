import { AxiosError } from "axios";
import { createUser } from "../apis/users.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Iusers {
  id: string;
  username: string;
  age: number;
  address: string;
}

const AddProductPage = () => {
  // router navigate
  const router = useNavigate();

  const [nameUser, setNameUser] = useState<string>("");
  const [addressUser, setAddressUser] = useState<string>("");
  const [ageUser, setAgeUser] = useState<number>(0);

  const handleNameUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameUser(event.target.value);
  };

  const handleAddressUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddressUser(event.target.value);
  };

  const handleAgeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgeUser(event.target.valueAsNumber);
  };

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // omit: bỏ đi 1 thuộc tính nào đó của 1 object
      const newUser: Omit<Iusers, "id"> = {
        username: nameUser,
        age: ageUser,
        address: addressUser,
      };
      await createUser(newUser);
      toast.success("Wow so easy!");
      // sau khi gửi dữ liệu thành công thì sẽ chuyển hướng về trang list-product
      router("/");
    } catch (error) {
      console.log("🚀 ~ handleSubmitForm ~ error:", error);
      toast.error((error as AxiosError).message);
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
      <div className="w-full">
        <form 
          onSubmit={(event) => handleSubmitForm(event)}
          className="flex flex-col items-center mt-10 gap-4 bg-white shadow-md rounded-lg "
        >
          <input
            type="text"
            className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
            placeholder="user name"
            value={nameUser}
            onChange={(event) => handleNameUser(event)}
          />
          <input
            type="text"
            className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
            placeholder="address user"
            value={addressUser}
            onChange={(event) => handleAddressUser(event)}
          />
          <input
            type="number"
            className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
            placeholder="age user"
            value={ageUser}
            onChange={(event) => handleAgeUser(event)}
          />
          <button className="bg-red-500 text-white p-2 w-full rounded-lg hover:bg-red-800">
            Thêm sản phẩm
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
