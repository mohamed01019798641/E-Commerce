import React, { useContext } from 'react'
import './CSS/Shopcategory.css'
import dropdown_icons from '../components/Assets/dropdown_icon.png'
import { Shopcontext } from '../context/ShopContext'
import Item from '../components/item/Item'
const ShopCategory = (props) => {
    const {all_product}=useContext(Shopcontext)
  return (
    <div className='shop-category'>
        <img className='shop-banner' src={props.banner} alt="" />
        <div className='shopcategory-indexSort'>
            <p><span>showing 1-12</span>out of 36 products</p>
            <div className='shopcategory-sort'>
                Sort by <img src={dropdown_icons} alt="" />

            </div>
        </div>
        <div className="shopcategory-product">
            {
                all_product.map((item,i)=>{
                    if(props.category===item.category){
                        return (
                            <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                        )
                    }else{
                        return null
                    } 
               })
            }
        </div>
        <div className='shopcategory-loadmore'>
            Explore More

        </div>
      
    </div>
  )
}

export default ShopCategory
