import React, {useContext} from 'react'
import { Link } from "react-router-dom"
import { DataContext } from '../context/Dataprovider'


 export const ProductoItems = ({ 
    id ,
    title ,
    price,
    image,
    category,
    cantida,}) => {

      const  value = useContext(DataContext);
      const  addCarrito = value.addCarrito;
  return (
    <div className='producto'>
    < a href='#'     >  
<div className="producto_img">
<img className='img123' src={image}  alt= {title}/>
</div>
</a>
<div className='producto_footer'> 
<h1>{title}</h1>
<p> {category}</p>
<p className='price'>{price}</p>


</div>
<div className='buttom'>
<button className='btn' onClick={() => addCarrito(id)} >  
Añadir al Carrito
</button>
<div>
    <a href='#' className='btn'>  Vista   </a>
</div>
</div>
</div>
  )
}

export default ProductoItems