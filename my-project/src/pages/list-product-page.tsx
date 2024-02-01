import React, { useEffect } from "react";
import { deleteUser, getAllUsers } from '../apis/users.api';

import { Iusers } from "../../interfaces/user.interface";
import { Link } from 'react-router-dom';
import { useState } from "react";

// export interface Iusers {
//   id: number;
//   username: string;
//   age: number;
//   address: string;
// }

const ListProductPage = () => {
	useEffect(() => {
		const fetchData = async () => {
			try {
				// call api thành công
				const response = await getAllUsers();
				console.log('fetchData ~ response:', response);
				setLists(response.data);
			} catch (error) {
				console.log('fetchData ~ error:', error);
				// call api thất bại
			}
		};
		fetchData();
	}, []);

	const [lists, setLists] = useState<Iusers[]>([]);

	const handleDeleteUser = async (idUser: number) => {
		try {
			await deleteUser(idUser);
			const newLists = lists.filter((value) => value.id !== idUser);
			setLists(newLists);
		} catch (error) {
			console.log('handleDeleteUser ~ error:', error);
		}
	};
  return (
		<div className="">
			{lists.map((value) => {
				return (
					<div
						key={value.id}
						className="mb-10 border  boder-b border-b-red-400 flex items-center justify-between"
					>
						<div>
							<p>id:{value.id}</p>
							<p>
								username:
								{value.username}
							</p>
							<p>
								age:
								{value.age}
							</p>
              <p>
								address:
								{value.address}
							</p>
						</div>

						<div>
							<Link
								to={`/edit-product/${value.id}`}
								className="bg-blue-400 py-2 px-4 rounded"
							>
								EDIT
							</Link>
							<button
								onClick={() => handleDeleteUser(value.id)}
								className="bg-red-400 py-2 px-4 rounded"
							>
								DELETE
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
  // return (
  //   <div className="container mx-auto mt-8">
  //     <table className="table-auto border-collapse w-full">
  //       <thead>
  //         <tr className="bg-gray-200">
  //           <th className="border p-2">ID</th>
  //           <th className="border p-2">Username</th>
  //           <th className="border p-2">Age</th>
  //           <th className="border p-2">Address</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {lists.map((value) => (
  //           <tr key={value.id} className="text-center">
  //             <td className="border p-2">{value.id}</td>
  //             <td className="border p-2">{value.username}</td>
  //             <td className="border p-2">{value.age}</td>
  //             <td className="border p-2">{value.address}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );
};
export default ListProductPage;
// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

//   const arrayData: Product[] = [
//     { id: 1, name: "iphone", price: 1000 },
//     { id: 2, name: "sam sung", price: 2000 },
//   ];

//   const [nameProduct, setNameProduct] = useState<string>("");
//   const [priceProduct, setPriceProduct] = useState<number>(0);
//   const [products, setProducts] = useState<Product[]>(arrayData);
//   const [isEdit, setIsEdit] = useState<boolean>(false);
//   const [idProduct, setIdProduct] = useState<number>(0);

//   const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;
//     setNameProduct(value);
//   };

//   const handleOnChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const price = event.target.valueAsNumber;
//     setPriceProduct(price);
//   };

//   const handleAddProduct = () => {
//     if (isEdit === true) {
//       const newProduct: Product = {
//         id: idProduct,
//         name: nameProduct,
//         price: priceProduct,
//       };
//       const newData = products.map((itemProduct) => {
//         if (itemProduct.id === idProduct) {
//           return newProduct;
//         }
//         return itemProduct;
//       });
//       setProducts(newData);
//       setNameProduct("");
//       setPriceProduct(0);
//       setIsEdit(false);
//       setIdProduct(0);
//     } else {
//       const newProduct: Product = {
//         id: Math.random(),
//         name: nameProduct,
//         price: priceProduct,
//       };
//       const newData = [...products, newProduct];
//       setProducts(newData);
//       setNameProduct("");
//       setPriceProduct(0);
//     }
//   };
//   const handleDeleteProduct = (product: Product) => {
//     const newData1 = products.filter((item) => {
//       if (item.id !== product.id) {
//         return item;
//       }
//     });
//     setProducts(newData1);
//   };

//   const handleUpdateProduct = (product: Product) => {
//     setNameProduct(product.name);
//     setPriceProduct(product.price);
//     setIsEdit(true);
//     setIdProduct(product.id);
//   };

//   return (
//     <div className="h-screen bg-gray-100 flex justify-center items-center">
//       <div className="w-[500px] bg-white">
//         <h1 className="text-lg text-center">thêm - sửa - xóa</h1>

//         <div className="w-full flex items-center gap-4">
//           <div className="flex items-center justify-between gap-4 w-full">
//             <input
//               type="text"
//               className="border border-gray-200 rounded py-2 px-2 w-full"
//               placeholder="Nhập tên sản phẩm"
//               value={nameProduct}
//               onChange={(event) => handleOnChange(event)}
//             />
//             <input
//               type="number"
//               className="border border-gray-200 rounded py-2 px-2 w-full"
//               placeholder="Nhập giá sản phẩm"
//               value={priceProduct}
//               onChange={(event) => handleOnChangePrice(event)}
//             />
//           </div>
//           <button
//             onClick={() => handleAddProduct()}
//             className="bg-blue-500 rounded text-white py-2 px-2"
//           >
//             {isEdit === true ? "Sửa" : "Thêm"}
//           </button>
//         </div>

//         <div className="flex flex-col gap-2 mt-10">
//           {products.map((data) => (
//             <div key={data.id} className="flex items-center px-4">
//               <div className="flex-1">
//                 <h2>{data.name}</h2>
//                 <p>${data.price}</p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={() => handleUpdateProduct(data)}
//                   className="bg-blue-500 rounded text-white py-2 px-2"
//                 >
//                   Sửa
//                 </button>
//                 <button
//                   onClick={() => handleDeleteProduct(data)}
//                   className="bg-red-500 rounded text-white py-2 px-2"
//                 >
//                   Xóa
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
