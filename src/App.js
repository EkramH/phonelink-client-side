import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import useInventory from "./hooks/useInventory";
import Inventory from "./pages/Inventory/Inventory";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import InventoryPage from "./pages/InventoryPage/InventoryPage";

export const InventoryContext = React.createContext([]);

function App() {
  const [inventories] = useInventory();
  return (
    <div>
      <Header></Header>
      <InventoryContext.Provider value={inventories}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/inventory" element={<Inventory></Inventory>}></Route>
          <Route
            path="/inventory/:inventoryId"
            element={<InventoryPage></InventoryPage>}
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </InventoryContext.Provider>
      <Footer></Footer>
    </div>
  );
}

export default App;
