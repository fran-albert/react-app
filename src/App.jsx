import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="">
      <header>
      <NavBar></NavBar>
      </header>
      <div className="">
        <ItemListContainer greeting="El stock es de 6 productos. Gracias"></ItemListContainer>
      </div>
    </div>
  );
}

export default App;
