import React, {useContext} from 'react'
import '../Styles/productos.css'
import {data} from '../context/Data'

import {DataContext} from '../context/Dataprovider'
import {ProductoItems} from '../componentes/ProductoItems';


const Productos = () => {
    const value = useContext(DataContext) // forma de consumir datos dentreo del contexto 
 /*   const [productos] = value.productos
console.log(productos)  */
  return (
    <>
    <h1 className='tittle'> PRODUCTOS  </h1>    
    <div className='Productos'>
       {
        data.items.map((producto ) => ( //Mapeando productos 
            <ProductoItems 
            key={producto.id}
            id = {producto.id}
            title = {producto.title}
            price= {producto.price}
            image= {producto.image}
            category= {producto.category}
            cantidad= {producto.cantidad}
            />
            
            
    
        )) }
      
      



    </div>
    </>
  )
}

export default Productos