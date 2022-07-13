import React from "react";
import Swal from 'sweetalert2'
import ItemCount from "./ItemCount";
const ItemListContainer = ({ greeting }) => {
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
            text: "Agregaste 1 productos al carrito",
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
            text: "Agregaste 12312productos al carrito",
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
      <div className="containers">
        <ItemCount initial={1} stock={5} onAdd={onAdd}></ItemCount>
      </div>
    </div>
  );
};
export default ItemListContainer;
