import React from "react";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";
import { Link } from "react-router-dom";
import "../App.css";
import { Button } from "@mui/material";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>No hay nada en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </>
    );
  }

  return (
    <div>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <div className="totalDates">
        <h4>
          Precio Total: $ {totalPrice().toFixed(2)}
        </h4>
        <Button size="small" color="primary">
          Comprar
        </Button>
      </div>
    </div>
  );
};

export default Cart;
