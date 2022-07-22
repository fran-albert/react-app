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
  

  const onAdd = (cantidad) => {
    if (cantidad == 1) {
          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Gracias',
            text: "Agregaste 1 producto al carrito",
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: 'Comprar',
            cancelButtonText: 'Seguir agregando!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Espera!',
                'Procedendo a comprar....',
                'info'
              )
            }
          })
    } else {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Gracias',
            text: "Agregaste "+cantidad+" productos al carrito",
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: 'Comprar',
            cancelButtonText: 'Seguir agregando!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Espera!',
                'Procedendo a comprar....',
                'info'
              )
            }
          })
    }
    
  };
  return (
    <div>
      <div className="texto">{greeting}</div>
      <div className="">
        <ItemCount initial={1} stock={5} onAdd={onAdd}></ItemCount>
        <ItemList data={data}></ItemList>
      </div>
    </div>
  );
};
export default ItemListContainer;
