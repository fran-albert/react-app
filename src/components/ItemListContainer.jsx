import React, {useState, useEffect} from "react";
import Swal from 'sweetalert2'
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";
import {productos} from '../utils/productos'


const ItemListContainer = ({ greeting }) => {

  const [data, setData] = useState([])

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(productos)
      }, 3000);
    })
    getData.then(res => setData(res))
  }, [])
  

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
