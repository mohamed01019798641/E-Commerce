import React, { createContext, useState } from 'react'
import all_product from '../components/Assets/all_product'
export const Shopcontext =createContext(null);

const getDefaulcart=()=>{
    let cart ={};
    for(let i=0; i < all_product.length+1;i++){
        cart[i]=0;

    }
    return cart;
}

const ShopcontextProveder=(props)=>{
    const [cartItem,setCartItem]=useState(getDefaulcart())
    
    

    const addToCart=(itemId)=>{
        setCartItem((priv)=>({...priv,[itemId]:priv[itemId]+1}))
       
    }
    const removeCart=(itemId)=>{
        setCartItem((priv)=>({...priv,[itemId]:priv[itemId]-1}))
    }

    const getTotalCartAmount=()=>{
        let totalAmound= 0;
        for(const item in cartItem){
            if(cartItem[item] > 0){
                let itemInfo = all_product.find((produc)=> produc.id === Number(item))
                totalAmound +=  itemInfo.new_price * cartItem[item];

            }
          

            
        }
        return  totalAmound;
    }

    const getTotalCartItem=()=>{
        let toalItem=0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                toalItem+=cartItem[item];
            }
        }
        return toalItem;
    }

    const contextvalue={getTotalCartItem,getTotalCartAmount,all_product,cartItem,addToCart,removeCart};

    
    
    return(
        <Shopcontext.Provider value={contextvalue}>
            {props.children}
        </Shopcontext.Provider>
    )
}
export default ShopcontextProveder;