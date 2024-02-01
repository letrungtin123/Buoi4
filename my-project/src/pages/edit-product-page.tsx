import { getUserById, updateUser } from '../apis/users.api';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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

	const [userDetail, setUserDetail] = useState<Omit<Iusers, 'id'>>({
		username: '',
    address:'',
		age: 0,
	});

	useEffect(() => {
		if (idParam) {
			const fetchData = async () => {
				try {
					const response = await getUserById(idParam);
					setUserDetail(response.data);
				} catch (error) {
					console.log('fetchData ~ error:', error);
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
			console.log('handleSubmitForm ~ newUser:', newUser);
			const response = await updateUser(newUser);
			console.log(' handleSubmitForm ~ response:', response);
			// sau khi gửi dữ liệu thành công thì sẽ chuyển hướng về trang list-product
			router('/');
		} catch (error) {
			console.log(' handleSubmitForm ~ error:', error);
		}
	};

	return (
		// tsx
		<div className="h-screen bg-gray-300 flex justify-center items-center">
			<div className="flex flex-col items-center gap-4">
				<h2 className="text-2xl font-bold">Sửa sản phẩm</h2>
				<form
					onSubmit={(event) => handleSubmitForm(event)}
					className="flex flex-col items-center gap-4 bg-white shadow-md rounded-lg p-4 w-[500px]"
				>
					<input
						type="text"
						className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
						placeholder="username"
						value={userDetail.username}
						onChange={(event) => handleUsernameUser(event)}
					/>
          <input
						type="text"
						className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
						placeholder="address user"
						value={userDetail.address}
						onChange={(event) => handleAddressUser(event)}
					/>
					<input
						type="number"
						className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
						placeholder="age user"
						value={userDetail.age}
						onChange={(event) => handleAgeUser(event)}
					/>
					<button className="bg-blue-500 text-white p-2 w-full rounded-lg hover:bg-purple-500">
						Sửa sản phẩm
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
