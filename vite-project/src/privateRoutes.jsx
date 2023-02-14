import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home';
import Cinema from '../pages/Cinema'
import Filmes from '../pages/Filmes'
import Dashboard from '../pages/Dashboard/Dashboard'
import EditFilmes from '../pages/Edits/EditFilmes';
import EditSessoes from '../pages/Edits/EditSessoes';
import EditBlog from '../pages/Edits/EditBlog';
import Blog from '../pages/Blog/Blog';

function PrivateRoutesApp(){
  return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cinema' element={<Cinema />} />
          <Route path='/Filmes' element={<Filmes />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/EditFilmes/:id' element={<EditFilmes />} />
          <Route path='/EditSessoes/:id' element={<EditSessoes />} />
          <Route path='/EditBlog/:id' element={<EditBlog />} />
          <Route path='/Blog/:id' element={<Blog />} />
        </Routes>
  )
}

export default PrivateRoutesApp;