import React from 'react'
import './Populer.css'
import data_product from '../Assets/data'
import Item from '../item/Item'
const Popluer = () => {
  return (
    <div className='Popluer'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className='Popluer-item'>
            {data_product.map((item,i)=>{
                return( <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>)

            })}

        </div>

      
    </div>
  )
}

export default Popluer
