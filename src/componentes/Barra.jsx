
import React, {useContext} from 'react'
import {   Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Styles/Compras.css'
import { DataContext } from '../context/Dataprovider' 
import { UserContext } from '../context/UserContext'

 const Barra = () => {

  const {user} = useContext(UserContext)


  const value = useContext(DataContext)
  const [menu,setMenu] = value.menu
  const [carrito] = value.carrito 

  return (
    <>
    <header>
      
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to={"/"} className="nav-link" >Home</Link>
        <Link to={'/UsuarioNuevo'} className="nav-link">Registrar</Link>
        
        <div className='cart'>
        <box-icon  name="cart" onClick={() => setMenu(true)} ></box-icon>
       <span className="item_total">{carrito.length}</span>
        </div>


<div className='Online'>
        {
         !user ? null : 'Contectado :   ' + user.users
        }

</div>
      </Nav>
      
    </Navbar>
    
    </header>
  </>

  )
}

export default Barra