import React , {useState, useContext}from 'react'
const CartContext = React.createContext([])

export const useCartContext = () =>  useContext(CartContext)

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);


    console.log("carrito", cart)

    // Agregar al Carrito
    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, cantidad: product.cantidad +cantidad} : product
            }))
        } else {
            setCart([...cart, {...item, cantidad}])
        }
    }
   
    const totalPrice = () => {
        return cart.reduce((prev,act) => prev + act.cantidad * act.price, 0)
    }
    
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0)

    // Limpiar Carrito
    const clearCart = () => setCart([])

    // Como saber si un producto está en el Carrito
    const isInCart = (id) => cart.find(producto => producto.id === id) ? true : false;

    // Quitar del Carrito

    const deleteProduct = (id) => setCart(cart.filter(product => product.id !== id))



  return (
    <CartContext.Provider value={{
        addToCart,
        clearCart,
        isInCart,
        deleteProduct,
        totalPrice,
        totalProducts,
        cart 
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider;