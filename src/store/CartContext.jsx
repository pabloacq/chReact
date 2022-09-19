import React, { useState, createContext, useEffect } from 'react'

export const cartContext = createContext()

function calculatePrice(item, quantity = item.quantity){
  return item.price * quantity
}

export function CartProvider({children}) {
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState([])

  useEffect(() => {
    let newQuantity = 0
    cart.map(cartItem => {
      newQuantity += cartItem.quantity
    })
    setQuantity(newQuantity)
  }, [cart])
  

  function addToCart(item, quantity){
    let copyCart = []
    if (isInCart(item)){
      copyCart = cart.map(cartItem =>{ 
        if(cartItem.id === item.id && cartItem.quantity+quantity <= cartItem.max) {
          cartItem.quantity += quantity
          cartItem.totalPrice = calculatePrice(cartItem)
        }
        return cartItem
     })
    }
    else{
      copyCart = [...cart]
      copyCart.push({...item, quantity: quantity, totalPrice:calculatePrice(item, quantity)} )
    }
    setCart(copyCart)
  }

  function isInCart(item){
    return cart.some(inCartItem => inCartItem.id === item.id)
  }

  function removeItem(id){
    const item = cart.find(item => item.id === id)
    const copyCart = cart.filter(item => item.id !== id)
    setCart(copyCart)
    return item
  }
  
  function clearCart(){
    setCart([])
  }

  return (
    <cartContext.Provider value={{cart, addToCart, removeItem, quantity, clearCart}}>
      {children}
    </cartContext.Provider>
  )
}