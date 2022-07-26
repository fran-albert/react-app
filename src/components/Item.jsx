import "../App.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { NavLink } from "react-router-dom";

export const Item = ({ info }) => {

  return (
    <Container maxWidth="xs">
      <Card sx={{ maxWidth: 340 }}>
        <CardMedia component="img" height="150" image={info.image} alt="" />
        <CardContent style={{ backgroundColor: "#eeeeee" }}>
          <Typography
            style={{ backgroundColor: "#eeeeee" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {info.title}
          </Typography>
        </CardContent>
        <CardActions style={{ backgroundColor: "#eeeeee" }}>
          <NavLink to={`/detalles/${info.id}`}>Ver Detalle</NavLink>          
        </CardActions>
      </Card>
    </Container>
  );
};

export default Item;
