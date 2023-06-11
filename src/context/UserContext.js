// Importar createcontext de react  
import {createContext, useState} from "react"

//Generamos nuestro contexto 
 export const UserContext = createContext()


// Generar un Provider (Provedor de informacion )

 export  const UserProvider = ({children}) => {
    const [user, setUser] = useState (null)
    const saveUser = (user) => {
        //Mandamos la infomracion 
        localStorage.setItem('user', JSON.stringify(user))
        //Cambio de estado para el local storage
        return setUser (JSON.parse(localStorage.getItem('user')))

    }
    //Logica para cambiar el estado del usuario a null o cerrar sesion  
    const deletUser = () => {
//Limpiamos la informacion del Usuario 
localStorage.removeItem('user')
//Generamos otro cambio de estamos 
return setUser(null)

}

    return(
        <UserContext.Provider value={{user,saveUser,deletUser}}>
{/* Creando toda la app de react */}

        {children}

        </UserContext.Provider>
        
        
    )
}