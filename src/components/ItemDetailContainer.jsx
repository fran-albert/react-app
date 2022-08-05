import React, { useState, useEffect } from "react"; 
import ItemDetail from "./ItemDetail";
// import { productos } from "../utils/productos";
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc} from 'firebase/firestore'

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const {itemID} = useParams();
  
  useEffect(() => {
    const querydb = getFirestore()
    const queryDoc = doc(querydb, 'products', itemID)
    getDoc(queryDoc)
    .then(res => setData({id: res.id, ...res.data()}))
  }, [itemID]);

  return <ItemDetail data={data}/>;
};

export default ItemDetailContainer;
