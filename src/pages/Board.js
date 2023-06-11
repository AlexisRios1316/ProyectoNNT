import Barra from '../componentes/Barra';
import Carrucel from '../componentes/Carrucel';
import Cuadro from '../componentes/Cuadro';
import Productos from '../componentes/Productos';
import '../Styles/productos.css'
import {BrowserRouter, Form, Route, Routes} from 'react-router-dom';
import {DataProvider} from '../context/Dataprovider';
import {Carrito} from '../Carrito/Carrito';


// aCCESOS A LOS USUARIOS AUTENTICADOS 
export const Board = () => {
    return (
       <>
      

       <Barra/>
       <Carrucel/>
       <div className='Appcp'>
       <DataProvider>
        <Carrito/>
       <Cuadro/>
      <Productos/>
      </DataProvider>
       </div>
      
       </>
    )
}
