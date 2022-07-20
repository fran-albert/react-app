import React, {useState, useEffect} from 'react'
import { ItemDetail } from './ItemDetail'
import {productos} from '../utils/productos'

const products = [
  {
    id: 1,
    image: "https://www.venex.com.ar/products_images/1638202580_1631815751_notebook-asus-tuf-fx506hc-hn064-i5-11400h-16gb-ssd-512gb-rtx-3050-4gb-15.6.jpg",
    title: "ASUS TUF FX506HCB RTX3050",
    price: 322089
  } ]

export const ItemDetailContainer = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(products)
      }, 3000);
    })
    getData.then(res => setData(res))
  }, [])

  return (
    <ItemDetail data={data}/>
  )
}
export default ItemDetailContainer;