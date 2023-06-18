// Login 
import { useState, useContext } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"; //Sirve para redireccionar un login 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Barra.css'
import {Form, Button, Alert} from 'react-bootstrap'
import { UserContext } from "../context/UserContext";




//Generar componente de React 

export const Home  = () => {

const {saveUser} = useContext(UserContext)




   //Cambio de estado  para manejar los inputs  (DUDA) ///
const [input,setInput] = useState(null)
const navigate = useNavigate()  //permite navegar a otra ruta 


const onChange  = (evt) => setInput({
   /* Iteracion expander las iteraciones del objeto */
...input,
[evt.target.name] : evt.target.value

})
   const login = async (evt) => {

      evt.preventDefault()
      try{
         const response  = await axios.post('http://127.0.0.1:5500/user/login', input)
         if(response.data.message == "Usuario incorrecto") return alert(response.data.message)
         saveUser(input)
         return navigate('/Board')
         console.log(input)
         console.log(response.data.IsAuth)
      }
      catch(error)
      {
         alert('verifica tus credenciales')
      }

   }
     return (
      <div class='background'>
      <div class="Conteiner">
         <h1 class='Texto' > LOGIN </h1>
      <Form onSubmit={login}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label class='Texto'>Email address</Form.Label>
    <Form.Control 
    type="email" placeholder="Enter email" 
    name="users" class='Texto'
    onChange={onChange} />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label class='Texto'>Password</Form.Label>
    <Form.Control 
    type="password"
     placeholder="Password" 
     name="password"
     onChange={onChange}  />
  </Form.Group>
  {/* Duda sobre boton y bootstrap*/}
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Link to={"/UsuarioNuevo"} className="nav-link2" > Registrarme  </Link>
</Form>
</div>
</div>

     )
}
