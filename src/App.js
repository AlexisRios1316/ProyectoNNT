//Sistema de Rutas
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Home} from './pages/Home'
import {Board} from './pages/Board'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
  
   
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Board" element={<Board />} />

      </Routes>
    </BrowserRouter>

   
  );
}

export default App;
