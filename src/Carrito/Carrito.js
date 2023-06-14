import React, {useContext, useEffect} from 'react'
import Card from '../Assets/tenis3.jpg'
import '../Styles/productos.css'
import 'boxicons'
import { DataContext } from '../context/Dataprovider'



 export const Carrito = () => {

 const value = useContext(DataContext)
  const [menu,setMenu] = value.menu   
const [carrito,setCarrito] =value.carrito



const show1 = menu ? "carritos show" : "carritos"

const show2 = menu ? "carrito show" : "carrito"

 const removeProducto = id => {
  if(window.confirm("Quieres suspender el prodcuto?")){
    carrito.forEach((item,index) => {
      if(item.id === id){
        item.cantidad = 1;
        carrito.splice(index, 1)
      }
    })
    setCarrito([...carrito])
  }
   
}



useEffect(()=>{
  console.log(carrito)
},[carrito])

  return (
<div className={show1}>  {/* Creando una iteracion para la parte del carrito y prudctos   */}
    <div className={show2}>
        <div className='carrito_close'>

        <box-icon name='x' onClick={value.closecard}> </box-icon>    
        </div>
       <h2> Carrito </h2> 
       <div className='carrito_center'>
      {
          
         carrito.map((producto) =>
           

            <div className='carrito_item'>
   <img src={producto.image}alt =""/>
   <div>
       <h3>{producto.title}</h3>
       <p className='price'> ${producto.price}</p>
   </div>
   <div>
       <box-icon name='up-arrow' type='solid'> </box-icon>
   <p className='cantidad'>{producto.cantidad}</p>
   <box-icon name="down-arrow" type='solid' > </box-icon>
        </div>
        <div className='remove_item'>
   <box-icon name='trash' type='solid' onClick={() => removeProducto(producto.id)}>  </box-icon>
   
        </div>
            </div>
         )
        }
         </div>
         
          


       <div className='carrito-footer'>  
       <h3> Total $2500 </h3>
       <button className='btn'> Payment</button>
       </div>
    </div>
     </div>
  )
}

export default Carrito