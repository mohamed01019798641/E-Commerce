import React from 'react'
import './Offer.css'
import excluciv_img from '../Assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offer'>
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <h1>ONLY ON BSET SELLERS PRODUCTS</h1>
            <button>Check Now</button>
        </div>
        <div className="rigth">
            <img src={excluciv_img} alt="" />
        </div>
    </div>
  )
}

export default Offer
