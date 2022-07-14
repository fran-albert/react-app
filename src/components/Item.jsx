import "../App.css";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Item = ({ info }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={info.image}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          descripcion..................... $ {info.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="success">Comprar</Button>
      </CardActions>
    </Card>   
  );
};

export default Item;
