// import CrudBuoi4 from './buoi4/crud';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddProductPage from "./pages/add-product-page";
import EditProductPage from "./pages/edit-product-page";
import LayoutDefault from "./layouts/LayoutDefault";
import ListProductPage from "./pages/list-product-page";
import LoginPage from "./CSSTEST/login-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/" element={<ListProductPage />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/edit-product/:id" element={<EditProductPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
