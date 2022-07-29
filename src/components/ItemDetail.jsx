import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {useCartContext} from "../context/CartContext"
import "../App.css";
import { Container } from "@mui/system";

const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const {addToCart} = useCartContext()

  const onAdd = (cantidad) => {
    setGoToCart(true);
    addToCart(data, cantidad)
  };
  return (
    <div>
      <Container className="tarjetas" maxWidth={"xs"}>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia component="img" height="300" image={data.image} alt="" />
          <CardContent style={{ backgroundColor: "#eeeeee" }}>
            <Typography
              style={{ backgroundColor: "#eeeeee" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {data.title}
            </Typography>
            <Typography variant="p">$ {data.price}</Typography>
            {goToCart ? (
              <Link to="/cart" className="finallyCompra">
                Finalizar Compra
              </Link>
            ) : (
              <ItemCount initial={3} stock={5} onAdd={onAdd}></ItemCount>
            )}
          </CardContent>
        </Card>
      </Container>
      <hr />
      <div className="titulos">
        Descipción <br />
        {data.descripcion}
      </div>
        <hr />
      <div className="titulos">
        <p>Características</p>
        </div>
      <div className="caracteristicas">
        <div className="padreDetalles">
          <div className="datasCaracteriscas">
            <img
              src="https://www.venex.com.ar/options_images/asdsssd.png"
              alt=""
            />
            <p>ALMACENAMIENTO</p>
          </div>
          <div className="textos">
            <p>Disco Sólido: {data.almacenamiento}</p>
          </div>
        </div>
        <div className="padreDetalles">
          <div className="datasCaracteriscas">
            <img
              src="https://www.venex.com.ar/options_images/conectividadasdasd.png"
              alt=""
            />
            <p>CONECTIVIDAD</p>
          </div>
          <div className="textos">
            <p>Wi-Fi: Sí </p>
            <p>Bluetooh: Sí </p>
          </div>
        </div>
        <div className="padreDetalles">
          <div className="datasCaracteriscas">
            <img
              src="https://www.venex.com.ar/options_images/png_graph.png"
              alt=""
            />
            <p>GRAFICOS</p>
          </div>
          <div className="textos">
            <p>Placa de Video: {data.gpu}</p>
          </div>
        </div>
        <div className="padreDetalles">
          <div className="datasCaracteriscas">
            <img
              src="https://www.venex.com.ar/options_images/asfasf.png"
              alt=""
            />
            <p>MEMORIA RAM</p>
          </div>
          <div className="textos">
            <p>Capacidad: {data.ram}</p>
          </div>
        </div>
        <div className="padreDetalles">
          <div className="datasCaracteriscas">
            <img
              src="https://www.venex.com.ar/options_images/asdasd.png"
              alt=""
            />
            <p>OTRAS CARACTERÍSTICAS</p>
          </div>
          <div className="textos">
            <p>Cámara Web: Sí </p>
            <p>Teclado Númerico: Sí </p>
          </div>
        </div>
        <div className="padreDetalles">
          <div className="datasCaracteriscas">
            <img
              src="https://www.venex.com.ar/options_images/scree.png"
              alt=""
            />
            <p>PANTALLA</p>
          </div>
          <div className="textos">
            <p>Pantalla: {data.pantalla} </p>
          </div>
        </div>
        <div className="padreDetalles">
          <div className="datasCaracteriscas">
            <img
              src="https://www.venex.com.ar/options_images/cpuuuu.png"
              alt=""
            />
            <p>PROCESADOR</p>
          </div>
          <div className="textos">
            <p>Procesador: {data.cpu} </p>
          </div>
        </div>
        <div className="padreDetalles">
          <div className="datasCaracteriscas">
            <img
              src="https://www.venex.com.ar/options_images/connn.png"
              alt=""
            />
            <p>PUERTOS</p>
          </div>
          <div className="textos">
            <p>
              USB 3.0: Sí <br />
              Hdmi: Sí <br />
              Audio/Mic 3.5: Sí{" "}
            </p>
          </div>
        </div>
        <div className="padreDetalles">
          <div className="datasCaracteriscas">
            <img
              src="https://www.venex.com.ar/options_images/15-open-source.png"
              alt=""
            />
            <p>SISTEMA OPERATIVO</p>
          </div>
          <div className="textos">
            <p> {data.sistema} </p>
          </div>
        </div>
        <div className="padreDetalles">
          <div className="datasCaracteriscas">
            <img
              src="https://www.venex.com.ar/options_images/asdasd.png"
              alt=""
            />
            <p>USO RECOMENDADO</p>
          </div>
          <div className="textos">
            <p>{data.uso1} </p>
            <p>{data.uso2} </p>
            <p>{data.uso3} </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ItemDetail;
