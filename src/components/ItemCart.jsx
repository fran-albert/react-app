import React from "react";
import { useCartContext } from "../context/CartContext";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../App.css";

const ItemCart = ({ product }) => {
  const { deleteProduct } = useCartContext();
  return (
    <div className="itemCart">
      <Card sx={{ maxWidth: 350 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="350"
            image={product.image}
            alt={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {product.title}
            </Typography>
            <Typography variant="body2" color="text.primary">
            Cantidad: {product.cantidad} <br />
            Precio Unitario: $ {product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button  size="small" color="primary" onClick={() => deleteProduct(product.id)}>Eliminar</Button>
        </CardActions>
      </Card>                 
      </div>
  );
};
export default ItemCart;
