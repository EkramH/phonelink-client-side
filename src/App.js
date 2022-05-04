import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import useInventory from "./hooks/useInventory";
import Inventory from "./pages/Inventory/Inventory";

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
        </Routes>
      </InventoryContext.Provider>
      <Footer></Footer>
    </div>
  );
}

export default App;
