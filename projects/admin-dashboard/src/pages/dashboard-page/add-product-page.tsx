import React, { useState } from "react";
import { initialInputData, initialUser } from "../utils/init";

import { AxiosError } from "axios";
import { Button } from "../components/buttons/button";
import { EButtonVariant } from "../types/enum.type.ts";
import FormGroup from "../components/forms/form-group";
import FormInput from "../components/forms/form-input";
import { PlusIcon } from "../icons/plus-icon.tsx";
import { createUser } from "../apis/users.api";
import { handleChange } from "../utils/handleChangeInput";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// import Logo from "../../../../public/logo.svg";






interface Iusers {
  id: string;
  username: string;
  age: number;
  address: string;
}

const AddProductPage = () => {
  // router navigate
  const router = useNavigate();

  const [newUser, setNewUser] = useState<Omit<Iusers, "id">>(initialUser);
  const initial = initialInputData({ newUser });

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({ event, newUser, setNewUser });
  };

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // omit: bỏ đi 1 thuộc tính nào đó của 1 object
      // const newUser: Omit<Iusers, "id"> = {
      //   username: nameUser,
      //   age: ageUser,
      //   address: addressUser,
      // };
      await createUser(newUser);
      toast.success("Wow so easy!");
      // sau khi gửi dữ liệu thành công thì sẽ chuyển hướng về trang list-product
      router("/");
    } catch (error) {
      console.log(" handleSubmitForm ~ error:", error);
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
      <div className="w-2.2/3 p-6 border-l border-gray-700">
        <h2 className="text-2xl font-bold mb-4">Add User</h2>
        <form onSubmit={(event) => handleSubmitForm(event)}>
          {initial.map((inputItem, index) => (
            <FormGroup title={inputItem.title} id={inputItem.id} key={index}>
              <FormInput
                name={inputItem.name}
                value={inputItem.value as string | number}
                placeholder={inputItem.placeholder}
                handleChange={(e) => handleChangeInput(e)}
              />
            </FormGroup>
          ))}
          <Button
            variant={EButtonVariant.PRIMARY}
            className="max-w-[300px] mx-auto flex items-center justify-center bg-red-500"
          >
            Add User
            <PlusIcon />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
// const [nameUser, setNameUser] = useState<string>("");
// const [addressUser, setAddressUser] = useState<string>("");
// const [ageUser, setAgeUser] = useState<number>(0);

// const handleNameUser = (event: React.ChangeEvent<HTMLInputElement>) => {
//   setNameUser(event.target.value);
// };

// const handleAddressUser = (event: React.ChangeEvent<HTMLInputElement>) => {
//   setAddressUser(event.target.value);
// };

// const handleAgeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
//   setAgeUser(event.target.valueAsNumber);
// };
{
  /* <div className="mb-6 mx-auto w-full">
            <label className="block mb-2 font-medium">Username:</label>
            <input
              type="text"
              className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
              placeholder="user name"
              value={nameUser}
              onChange={(event) => handleNameUser(event)}
            />
          </div> */
}
{
  /* <input
              type="text"
              className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
              placeholder="user name"
              value={nameUser}
              onChange={(event) => handleNameUser(event)}
            /> */
}
{
  /* <FormGroup title="Username:" id="username">
            <FormInput
              placeholder="Username"
              value={newUser.username}
              handleNameUser={(e) =>
                handleChangeInput(e)
              }
              name="name"
            />
          </FormGroup>
          <FormGroup title="Address:" id="address">
            <FormInput
              placeholder="Address"
              value={newUser.address}
              handleNameUser={(e) =>
                handleChangeInput(e)
              }
              name="address"
            />
          </FormGroup> */
}
{
  /* <div className="mb-6 mx-auto w-full">
            <label className="block mb-2 font-medium">Address:</label>
            <input
              type="text"
              className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
              placeholder="address user"
              value={addressUser}
              onChange={(event) => handleAddressUser(event)}
            />
          </div> */
}
{
  /* <FormGroup title="Age:" id="age">
            <FormInput
              placeholder="Age"
              value={newUser.age}
              handleNameUser={(e) =>
                handleChangeInput(e)
              }
              name="age"
            />
          </FormGroup> */
}
{
  /* <div className="mb-6 mx-auto w-full">
            <label className="block mb-2 font-medium">Age:</label>
            <input
              type="number"
              className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
              placeholder="age user"
              value={ageUser}
              onChange={(event) => handleAgeUser(event)}
            />
          </div> */
}
