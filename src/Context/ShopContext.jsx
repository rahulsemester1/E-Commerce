import React,{createContext, useState} from 'react'

import all_product from "../assets/all_product.js"

const getDefaultCart=()=>{
  let cart={};
  for(let index=1;index<=all_product.length;index++){
    cart[index]=0;
  }
  return cart;
}


export const ShopContext=createContext();   
export default function ShopContextProvider({children}) {
let [cartItems,setcartItems]=useState(getDefaultCart())

const addToCart=(itemId)=>{
  setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  console.log(cartItems);
 }
 console.log(cartItems);

      const getCartTotal=()=>{
        let totalAmt=0;
        for(let item of Object.keys(cartItems)){
          if(cartItems[item]>0){
            let iteminfo=all_product.find((val)=>val.id===Number(item));
            totalAmt+=iteminfo.new_price*cartItems[item];
          }
        }
        return totalAmt;
}


const removeFromCart=(itemId)=>{
  setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}

  return (
   <ShopContext.Provider value={{getCartTotal,all_product,cartItems,addToCart,removeFromCart}} >
      {children}
   </ShopContext.Provider>
  )
}


