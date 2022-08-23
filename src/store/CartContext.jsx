import React, { useState, createContext } from 'react'
import { useEffect } from 'react'


export const cartContext = createContext()

export function CartProvider({children}) {
  const [cart, setCart] = useState([])

  useEffect(() => {
    console.log(cart)
  }, [cart])
  
  function addToCart(item, quantity){
    let copyCart = []
    if (isInCart(item)){
      copyCart = cart.map(cartItem =>{ 
        if(cartItem.id === item.id && cartItem.quantity+quantity <= cartItem.max) {
          cartItem.quantity += quantity
        }
        return cartItem
     })
    }
    else{
      copyCart = [...cart]
      copyCart.push({...item, quantity: quantity} )
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
  
  function clear(){
    setCart([])
  }

  return (
    <cartContext.Provider value={{cart, addToCart}}>
      {children}
    </cartContext.Provider>
  )
}