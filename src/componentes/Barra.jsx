
import React from 'react'
import {   Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
 const Barra = () => {
  return (
    <>
    <header>
      
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to={"/"} className="nav-link" >Home</Link>
        <Link href="#features" className="nav-link">Features</Link>
        <Link href="#pricing" className="nav-link" >Pricing</Link>
      </Nav>
      
    </Navbar>
    
    </header>
  </>

  )
}

export default Barra