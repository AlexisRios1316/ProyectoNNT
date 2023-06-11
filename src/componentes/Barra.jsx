
import React from 'react'
import {   Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Styles/Compras.css'
 const Barra = () => {
  return (
    <>
    <header>
      
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to={"/"} className="nav-link" >Home</Link>
        <Link href="#features" className="nav-link">Features</Link>
        
        <div className='cart'>
        <box-icon  name="cart" ></box-icon>
       <span className="item_total">0</span>
        </div>
      </Nav>
      
    </Navbar>
    
    </header>
  </>

  )
}

export default Barra