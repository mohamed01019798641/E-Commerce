import React from 'react'
import './NewsLeter.css'

const NewsLeter = () => {
  return (
    <div className='newsLetter'>
        <h1>Get Exclisive Ofeers On Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='yur email id' />
            <button>Subscribe</button>
        </div>

      
    </div>
  )
}

export default NewsLeter
