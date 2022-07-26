import React, { useState } from "react";
import { Button } from "@mui/material";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const disminuir = () => {
    setCount(count - 1);
  };
  const aumentar = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <Button variant="outlined" disabled={count <= 1} onClick={disminuir}>
        -
      </Button>
      <span>{count}</span>
      <Button variant="outlined" disabled={count > stock} onClick={aumentar}>
        +
      </Button>
      <div>
        <Button
          variant="contained"
          disabled={stock <= 0}
          onClick={() => onAdd(count)}
        >
          Agregar al Carrito
        </Button>
      </div>
    </div>
  );
};
export default ItemCount;
