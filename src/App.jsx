import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Cart } from "./components/Cart";
import ItemListContainer from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nosotros } from "./components/Nosotros";
import { Contacto } from "./components/Contacto";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <header>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos/:productosID" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/detalles/:itemID" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
