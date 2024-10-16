import React, { useContext } from 'react'
import './CartItems.css'
import { Shopcontext } from '../../context/ShopContext';
 import remove_icon from '../Assets/cart_cross_icon.png';
const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItem,removeCart}=useContext(Shopcontext);


   
  return (
    <div className='CartItems'>
        <div className="cartitem-fromat">
           <p>Products</p>
           <p>Title</p>
           <p>Price</p>
           <p>Quantity</p>
           <p>Total</p>
           <p>Remove</p>
        </div>
        <hr />
       

        {
            all_product.map((e,i)=>{
                if(cartItem[e.id]>0){
                    return(
                        <div key={i}>
                            <div  className="cartitem-fromat cart">
                             <img src={e.image} alt=""  className='cart-icon'/>
                             <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='btn'>{cartItem[e.id]}</button>
                            <p>${e.new_price * cartItem[e.id]}</p>
                            <img src={remove_icon} alt="" onClick={()=>{removeCart(e.id)}}  className='remov-icon'/>
                            </div>
                            <hr />
                            



                        </div>
                    )
                }else{
                    return null
                }
            })
        }
        <div className="cart-item-dom">
            <div className="cart-item-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cart-total">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cart-total">
                        <p>Shipping Free</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cart-total">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cart-promo">
                <p>If you have a promo code, Enter it here</p>
                <div className="cart-box">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
        </div>
   

      
   
  )
}

export default CartItems
