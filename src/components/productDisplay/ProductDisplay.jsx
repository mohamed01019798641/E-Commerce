import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { Shopcontext } from '../../context/ShopContext'
const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(Shopcontext);
  return (
    <div className='ProductDisplay'>
      <div className="product-disply-left">
        <div className="product-img">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="product-display-img">
            <img src={product.image} alt=""  className='product-diplay-main-img'/>
        </div>

      </div>
      <div className="product-disply-right">
        <h1>{product.name}</h1>
        <div className="product-display-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
          <div className='pric-old'>${product.old_price}</div>
          <div className='price-new'>${product.new_price}</div>
        </div>
        <div className="right-description">
          A lightweight, usually knitted, pullover shirt, close-fittin.
        </div>
        <div className="right-size">
          <h1>Select Size</h1>
          <div className='right-size'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
         </div>
          <button onClick={()=>{addToCart(product.id)}} className='button'>ADD TO CART</button>
          <p className='right-category'><span>Category :</span>Women , T-shirt, Crop Top</p> 
          <p className='right-category'><span>Tags :</span>Modern, Latest , T-shirt, Crop Top</p> 
      </div>
    </div>
  )
}

export default ProductDisplay
