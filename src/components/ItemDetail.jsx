import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../App.css";
import { Container } from "@mui/system";

const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (cantidad) => {
    setGoToCart(true);
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
    </div>
  );
};

export default ItemDetail;
