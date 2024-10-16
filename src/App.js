import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSinup from './pages/LoginSinup'
import Footer from './components/footer/Footer'
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'


const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Navbar/>
         <Routes>
           <Route path='/' element={<Shop/>}/>
           <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>}/>
           <Route path='/womens' element={<ShopCategory banner={women_banner} category='women'/>}/>
           <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kid'/>}/>
           <Route path='/product' element={< Product/>}>
           <Route path=':productid' element={< Product/>}/>
           </Route>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='/login' element={<LoginSinup/>}/>
         </Routes>
         <Footer/>
         
      
      </BrowserRouter>
      
      
    </div>
  )
}

export default App