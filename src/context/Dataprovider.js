import React, { createContext, useState, useEffect } from "react";
import { data } from "./Data";


export const DataContext = createContext();

export const DataProvider = (props) => {
	const [productos, setProductos] = useState([]);
	const[menu, setMenu ]  = useState(false)



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

 const value = {
        productos : [productos],
		menu: [menu, setMenu]   //importamos MENU

    }
/*  ERROES PARA RESOLVER */
	
	return (
		<DataContext.Provider >
			{props.children}
		</DataContext.Provider>
	)
};