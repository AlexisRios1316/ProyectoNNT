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
const addCarrito = (producto) =>{
    console.log(carrito)

	const check = carrito.every(item => {  
		return item.id != producto.id;

	})
	console.log(check)
	if(check){
		
		setCarrito([...carrito,producto])
	
	} else {
		alert(" El producto se ha añadido al carrito ")

	}

}







 const value = {
        productos : [productos],
		menu: [menu, setMenu],
       addCarrito: addCarrito,
	   carrito: [carrito,setCarrito],
	   showcard:()=> setMenu(true),
	   closecard: () => setMenu(false)
		   //importamos MENU

    }

	
/*  ERROES PARA RESOLVER */
	
	return (
		<DataContext.Provider
         value={value}	
		>
			{props.children}

		</DataContext.Provider>
	)
};