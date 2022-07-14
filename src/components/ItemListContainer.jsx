import React, {useState, useEffect} from "react";
import Swal from 'sweetalert2'
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";

const productos = [
  {
    id: 1,
    image: "https://www.venex.com.ar/products_images/1638202580_1631815751_notebook-asus-tuf-fx506hc-hn064-i5-11400h-16gb-ssd-512gb-rtx-3050-4gb-15.6.jpg",
    title: "ASUS TUF FX506HCB",
    price: 322089
  },
  {
    id: 2,
    image: "https://www.venex.com.ar/products_images/1654711035_4.png",
    title: "APPLE MACBOOK PRO M1 PRO",
    price: 988249
  },
  {
    id: 3,
    image: "https://www.venex.com.ar/products_images/1656433721_sin_t_tulo-1.png",
    title: "GIGABYTE G5 15 I5 11400H RTX3050",
    price: 281990
  },
  {
    id: 4,
    image: "https://www.venex.com.ar/products_images/1626471024_notebook-lenovo-ideapad-s145-15iil-i3-1005-g1-4gb-1tb-15.6-free.jpg",
    title: "LENOVO IDEAPAD S145 15IIL",
    price: 124429
  },
  {
    id: 5,
    image: "https://www.venex.com.ar/products_images/1645726383_notebook-lenovo-thinkbook-g2-core-i5-1135g7-8gb-ssd-256gb-15.6-free.jpg",
    title: "LENOVO THINKBOOK G2 CORE I5 1135G7",
    price: 194709
  },
  {
    id: 6,
    image: "https://www.venex.com.ar/products_images/1652467502_notebook-asus-zenbook-ux425ea-ki837w-i5-1135g7-8gb-ssd-512gb-14-w11.jpg",
    title: "ASUS ZENBOOK UX425EA-KI837W I5",
    price: 263529
  },
  {
    id: 7,
    image: "https://www.venex.com.ar/products_images/1637336314_notebook-asus-rog-zephyrus-ga401ihr-ryzen-7-4800hs-16gb-512gb-1650-14-w10.jpg",
    title: "ASUS ROG ZEPHYRUS GA401IHR RYZEN 7",
    price: 409939
  },
  {
    id: 8,
    image: "https://www.venex.com.ar/products_images/1652468601_notebook-asus-rog-ryzen-7-6800h-16gb-ssd-512gb-rtx-3060-15.6-w11.jpg",
    title: "ASUS ROG G513RM RYZEN 7 6800H 16GB",
    price: 549019
  },
  {
    id: 9,
    image: "https://www.venex.com.ar/products_images/1655987042_cucarda.jpg",
    title: "ACER ASPIRE 5 I7 10510U 8GB SSD 256GB",
    price: 197639
  },
  {
    id: 10,
    image: "https://www.venex.com.ar/products_images/1653580395_fse.png",
    title: "APPLE MACBOOK PRO M1 PRO 16GB",
    price: 878459
  },
  {
    id: 11,
    image: "https://www.venex.com.ar/products_images/1656435818_sin_t_tulo-1.png",
    title: "GIGABYTE AERO XE5 I7 12700H 16GB",
    price: 708990
  },
  {
    id: 12,
    image: "https://www.venex.com.ar/products_images/1656434718_sin_t_tulo-1.png",
    title: "GIGABYTE AORUS 17G I7 11700H 32GB",
    price: 657990
  },

]

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
      <div className="containers">
        <ItemCount initial={1} stock={5} onAdd={onAdd}></ItemCount>
        <ItemList data={data}></ItemList>
      </div>
    </div>
  );
};
export default ItemListContainer;
