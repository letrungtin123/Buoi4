// import CrudBuoi4 from './buoi4/crud';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayouDefault from './Layout/LayouDefault';
import AddProductPage from './Pages/Addproductpage';
import EditProductPage from './Pages/Editproductpage';
import ListProductPage from './Pages/Listproductpage';
function App() {
	return(
		<BrowserRouter>		
		<Routes>
			<Route path='/' element={<LayouDefault/>}>
			<Route path='/' element={<ListProductPage/>} />
			<Route path='/add-product' element={<AddProductPage/>} />
			<Route path='/edit-product' element={<EditProductPage/>} />
			</Route>
		</Routes>
		</BrowserRouter>
		
	);
}

export default App;