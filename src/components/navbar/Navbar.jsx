import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { Shopcontext } from '../../context/ShopContext'

const Navbar = () => {
    const [menu,setmenu]=useState('shop');
    const {getTotalCartItem}=useContext(Shopcontext);
    
  return (
    <div className='navbar'>
        <div className='nav-logo'>
           <Link to='/'><img src={logo} alt="" /></Link> 
            <p>SHOPPER</p>
        </div>
       
        <ul  className="nav-menu">
            <li onClick={()=>{setmenu('shop')}}><Link to='/' style={{textDecoration:'none'}}> Shop</Link> {menu==='shop'? <hr></hr>:''}</li>
            <li onClick={()=>{setmenu('men')}}><Link to='/mens' style={{textDecoration:'none'}}>Men</Link> {menu==='men'? <hr></hr>:''}</li>
            <li onClick={()=>{setmenu('women')}}> <Link to='/womens' style={{textDecoration:'none'}}>Women</Link> {menu==='women'? <hr></hr>:''}</li>
            <li onClick={()=>{setmenu('kids')}}> <Link to='/kids' style={{textDecoration:'none'}}>Kids</Link > {menu==='kids'? <hr></hr>:''}</li>
        </ul>
        <div className="nav-login-card">
            <Link to='/login'><button>Login</button></Link>
            <Link to='./cart'><img src={cart} alt="" /></Link>
            <div className='nav-cart-count'>{getTotalCartItem()}</div>
        </div>
        
      
    </div>
  )
}

export default Navbar
