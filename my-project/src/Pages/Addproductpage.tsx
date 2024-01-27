import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface IAddUser {
  id: number;
  username: string;
  age: number;
  address: string;
}

const EditProductPage = () => {
  const router = useNavigate();
  const [nameUser, setNameUser] = useState<string>("");
  const [addressUser, setAddressUser] = useState<string>("");
  const [ageUser, setAgeUser] = useState<number>(0);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameUser(event.target.value);
  };
  const handleChangeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddressUser(event.target.value);
  };
  const handleChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgeUser(event.target.valueAsNumber);
  };

  const handleOnSumit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const newProduct: Omit<IAddUser, "id"> = {
        username: nameUser,
        age: ageUser,
        address: addressUser,
      };
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      await response.json();
      router("/");
    } catch (error) {
      console.log("handleOnSumit ~ error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Add New User</h1>
        <form
          onSubmit={(event) => handleOnSumit(event)}
          className="flex flex-col gap-4 w-full"
        >
          <h1>Username:</h1>
          <input
            value={nameUser}
            className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            type="text"
            onChange={(event) => handleChangeName(event)}
          />
          <h1>Age:</h1>
          <input
            value={ageUser}
            className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            type="number"
            placeholder="Age"
            onChange={(event) => handleChangeAge(event)}
          />
          <h1>Address:</h1>
          <input
            value={addressUser}
            className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            type="text"
            onChange={(event) => handleChangeAddress(event)}
          />
          <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-800 focus:outline-none">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};



export default EditProductPage;