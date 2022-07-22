import React from "react";

const ItemDetail = ({ data }) => {
  return (
    <div>
      informacion
      <h1>{data.title}</h1> y {data.image}
    </div>
  );
};

export default ItemDetail;
