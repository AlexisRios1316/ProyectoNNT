import React, { createContext, useState, useEffect } from "react";
import { data } from "./Data";


export const DataContext = createContext();

export const DataProvider = (props) => {
	const [productos, setProductos] = useState([]);
	const[menu, setMenu ]  = useState(false) //Manejador de estados 
    const [carrito , setCarrito] = useState([])



	/* ERRORES
 
  useEffect(() => {
		const producto = data.items
		if(producto){
            setProductos(producto)
        }else{
            setProductos([])
        }

			
            setProductos([])
		}, []); 

 */


// Constante para guardar datos 
const addCarrito = (id) =>{

	const check = carrito.every(item => {
		return item.id !== id;
	})
	if(check){
		const data = productos.filter(productos =>{
			return productos.id === id
		})
		setCarrito([...carrito,...data])
	
	} else {
		alert(" El producto se ha añadido al carrito ")

	}

}



 const value = {
        productos : [productos],
		menu: [menu, setMenu],
       addCarrito: addCarrito,
	   carrito: [carrito,setCarrito]
		   //importamos MENU

    }

	
/*  ERROES PARA RESOLVER */
	
	return (
		<DataContext.Provider >
			{props.children}
		</DataContext.Provider>
	)
};