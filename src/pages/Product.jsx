import React, { useContext } from 'react'
import {Shopcontext} from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';

const Product = () => {
  const {all_product}=useContext(Shopcontext);
  const {productid}=useParams();
  const product=all_product.find((e)=>e.id === Number(productid))
  return (
    <div >
     <Breadcrum product={product}/>
     <ProductDisplay product={product}/>
      <DescriptionBox/>
      
    </div>
  )
}

export default Product
