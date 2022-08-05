import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";
import { productos } from "../utils/productos";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const { productosID } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "products");
    if (productosID) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", "productosID")
      );
      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
  }, [productosID]);

  return (
    <div>
      <div className="texto">{greeting}</div>
      <div className="">
        <ItemList data={data}></ItemList>
      </div>
    </div>
  );
};
export default ItemListContainer;
