import React, { createContext, useState, useEffect } from "react";
import { data } from "./Data";


export const DataContext = createContext();

export const DataProvider = (props) => {
	const [productos, setProductos] = useState([]);
	const[menu, setMenu ]  = useState(false) //Manejador de estados 
    const [carrito , setCarrito] = useState([])
  const [total, setTotal] = useState(0);


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


useEffect(() => {
	const getTotal = () => {

   const res  = carrito.reduce((prev, item) => {
	console.log(prev,item.price, item.cantidad)
	return prev + (item.price * item.cantidad)
   }, 0 )
   setTotal(res)
}
	getTotal()
},[carrito]
)




 const value = {
        productos : [productos],
		menu: [menu, setMenu],
       addCarrito: addCarrito,
	   carrito: [carrito,setCarrito],
	   showcard:()=> setMenu(true),
	   closecard: () => setMenu(false),
	   total: [total,setTotal]
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