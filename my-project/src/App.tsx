import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AddProductPage from './pages/add-product-page';
import DashboardPage from './CSSTEST/dashboard-page';
// import CountBuoi5 from './components/buoi5/count';
import EditProductPage from './pages/edit-product-page';
import LayoutDefault from './layouts/LayoutDefault';
import ListProductPage from './pages/list-product-page';
import LoginPage from './CSSTEST/login-page';

// import LoginPage from './pages/login-page';
// import TestCss from './pages/test-css';

const App = () => {
	// cách 2
	const router = createBrowserRouter([
		{
			path: '/',
			element: <LayoutDefault />,
			children: [
				{
					path: '/',
					element: <ListProductPage />,
				},
				{
					path: '/add-product',
					element: <AddProductPage />,
				},
				{
					// path: '/edit-product/3',
					path: '/edit-product/:id',
					element: <EditProductPage />,
				},
				{
					path: '/login',
					element: <LoginPage />,
				},
				{
					path: '/dashboard',
					element: <DashboardPage />,
				},
				
			],
		},
		// { path: '/login', element: <LoginPage /> },
		// {
		// 	path: '/ahihi',
		// 	element: <TestCss />,
		// },
	]);

	return <RouterProvider router={router} />;
};

export default App;

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // import CrudBuoi4 from './buoi4/crud';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// import AddProductPage from './Pages/Addproductpage';
// import EditProductPage from './Pages/Editproductpage';
// import LayouDefault from './Layout/LayouDefault';
// import ListProductPage from './Pages/Listproductpage';
// function App() {
// 	return(
// 		<BrowserRouter>		
// 		<Routes>
// 			<Route path='/' element={<LayouDefault/>}>
// 			<Route path='/' element={<ListProductPage/>} />
// 			<Route path='/add-product' element={<AddProductPage/>} />
// 			<Route path='/edit-product' element={<EditProductPage/>} />
// 			</Route>
// 		</Routes>
// 		</BrowserRouter>
		
// 	);
// }

// export default App;