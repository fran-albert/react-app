import React, {useState, useEffect} from "react";
import Swal from 'sweetalert2'
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";
import {productos} from '../utils/productos'
import {useParams} from 'react-router-dom'


const ItemListContainer = ({ greeting }) => {

  const [data, setData] = useState([])
  const {productosID} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(productos)
      }, 1000);
    });
    if(productosID) {
      getData.then(res => setData(res.filter(asus => asus.category === productosID )))
    } else {
      getData.then(res => setData(res))
    }
  }, [productosID])
  

  
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
