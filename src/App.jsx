import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
        <ItemListContainer greeting="El stock es de 6 productos. Gracias"></ItemListContainer>

      </header>      
    </div>
  );
}

export default App;
