import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
// import Product from "./components/Product";
import AllProducts from "./components/AllProducts";
import AddProducts from "./components/AddProducts";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>   
        <Navbar />
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/product" element={<Product />} /> */}
          <Route path="/addproduct" element={<AddProducts />}/>
          <Route path="/allproducts" element={<AllProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
