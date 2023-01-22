import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import Cinema from '../pages/Cinema'
import Filmes from '../pages/Filmes'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import Dashboard from '../pages/Dashboard'


function RoutesApp(){
  return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cinema' element={<Cinema />} />
          <Route path='/Filmes' element={<Filmes />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Cadastro' element={<Cadastro />} />
          <Route path='/Dashboard' element={<Dashboard />} />
        </Routes>
  )
}

export default RoutesApp;