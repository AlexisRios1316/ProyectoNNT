//Sistema de Rutas
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Home} from './pages/Home'
import {Board} from './pages/Board'
import 'bootstrap/dist/css/bootstrap.min.css';
import {UserProvider} from  './context/UserContext'
import {UsuarioNuevo} from './pages/UsuarioNuevo'

function App() {
  return (
  
   <UserProvider>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Board" element={<Board />} />
        <Route path="/UsuarioNuevo" element={<UsuarioNuevo />} />
        
      </Routes>
    </BrowserRouter>
    
    </UserProvider>
   
  );
}

export default App;
