import React from 'react'

export const ItemDetail = ({data}) => {
  return (
    <Container maxWidth="xs">
      <Card sx={{ maxWidth: 340 }}>
        <CardMedia component="img" height="150" image={data.image} alt="" />
        <CardContent style={{ backgroundColor: "#eeeeee" }}>
          <Typography
            style={{ backgroundColor: "#eeeeee" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {data.title}
          </Typography>
        </CardContent>
        <CardActions style={{ backgroundColor: "#eeeeee" }}>
          <Button
            size="small"
            variant="contained"
            color="info"
            onClick={()=>alert("asd")}
            style={{ backgroundColor: "#d07019" }}
          >
            Ver Detalle
          </Button>
          
        </CardActions>
      </Card>
    </Container>
  )
}

export default ItemDetail;