import React, { useState, useEffect } from "react"; 
import ItemDetail from "./ItemDetail";
import { productos } from "../utils/productos";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const {itemID} = useParams();
  
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 100);
    });
    if(itemID) {
      getData.then(res =>setData(res.find(detalle => detalle.id == itemID)))
    }
  }, [itemID]);

  return <ItemDetail data={data}/>;
};

export default ItemDetailContainer;
