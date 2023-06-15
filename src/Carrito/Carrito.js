import React, {useContext, useEffect} from 'react'
import Card from '../Assets/tenis3.jpg'
import '../Styles/productos.css'
import 'boxicons'
import { DataContext } from '../context/Dataprovider'



 export const Carrito = () => {

 const value = useContext(DataContext)
  const [menu,setMenu] = value.menu   
const [carrito,setCarrito] =value.carrito
const [total] = value.total



const show1 = menu ? "carritos show" : "carritos"

const show2 = menu ? "carrito show" : "carrito"


//RESTA Y SUMA DEL PRODCUTO
const resta = id => {
carrito.forEach(item =>{
  if(item.id === id){
    console.log(item.cantidad)
 item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -=1;
console.log(item.cantidad)
  }
  setCarrito([...carrito])
})
}

//SUMA
const suma = id => {
  carrito.forEach(item =>{
    if(item.id === id){
      console.log(item.cantidad)

   item.cantidad +=1;
   
  console.log(item.cantidad)
    }
    setCarrito([...carrito])
  })
  }




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

      /*PARTE PARA HACER LA SUMA DE LOS PRODCUTOS EN DINERO */
        carrito.length === 0 ? <h2 style={{
          textAlign: "center", fontSize: "3rem"

        }}> Carrito Vacio  </h2> :  <>

{
          
         carrito.map((producto) =>
           

            <div className='carrito_item' key={producto.id}>
   <img src={producto.image}alt =""/>
   <div>
       <h3>{producto.title}</h3>
       <p className='price'> ${producto.price}</p>
   </div>
   <div>

       <box-icon name='up-arrow' type='solid' onClick = {() => suma (producto.id)}> </box-icon>
   <p className='cantidad'>{producto.cantidad}</p>
   <box-icon name="down-arrow" type='solid' onClick = {() => resta (producto.id)} > </box-icon>
        </div>
        
        <div className='remove_item'>
   <box-icon name='trash' type='solid' onClick={() => removeProducto(producto.id)}>  </box-icon>
   
        </div>
            </div>
         )
        }
        </>
 }

         </div>
         
          


       <div className='carrito-footer'>  
       <h3> Total $ {total} </h3>
       <button className='btn'> Payment</button>
       </div>
    </div>
     </div>
  )
}

export default Carrito