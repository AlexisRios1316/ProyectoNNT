import React, {useContext} from 'react'
import Card from '../Assets/tenis3.jpg'
import '../Styles/productos.css'
import 'boxicons'
import { DataContext } from '../context/Dataprovider'



 export const Carrito = () => {

 const value = useContext(DataContext)
 { /*const [menu,setMenu] = value.menu   

const show1 = menu ? "carritos show : "carritos";

const show1 = menu ? "carrito show : "carrito";


// Funcion para volver falso el menu y va en carrito_close
const tooglefalse = () => {
  setMenu(false)
}
*/
}




  return (
<div className="carritos">  {/* Creando una iteracion para la parte del carrito y prudctos   */}
    <div className="carrito">
        <div className='carrito_close'>

        <box-icon name='x'> </box-icon>    
        </div>
       <h2> Su Carrito  </h2> 
       <div className='carrito_center'>
         <div className='carrito_item'>
<img src={Card}alt =""/>
<div>
    <h3> TITLE </h3>
    <p className='price'> $458</p>
</div>
<div>
    <box-icon name='up-arrow' type='solid'> </box-icon>
<p className='cantidad'> 1 </p>
<box-icon name="down-arrow" type='solid' > </box-icon>
     </div>
     <div className='remove_item'>
<box-icon name='trash' type='solid'>  </box-icon>

     </div>
         </div>
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