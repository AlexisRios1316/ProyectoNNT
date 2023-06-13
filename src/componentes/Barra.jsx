
import React, {useContext} from 'react'
import {   Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Styles/Compras.css'
import { DataContext } from '../context/Dataprovider' 

 const Barra = () => {

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
        <Link href="#features" className="nav-link">Features</Link>
        
        <div className='cart'>
        <box-icon  name="cart" onClick={() => setMenu(true)} ></box-icon>
       <span className="item_total">{carrito.length}</span>
        </div>
      </Nav>
      
    </Navbar>
    
    </header>
  </>

  )
}

export default Barra