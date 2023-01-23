import Estilomenu from './style'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'
// import './style.css'

function Menu(props){
  return(
    <Estilomenu>
      <div className="menu">
        <div className="logo">
          <h3><a href=''>CineCinema</a></h3>
        </div>
        <ul>
          <li><Link to="/Cinema">Cinemas</Link></li>
          <li><Link to="/Filmes">Filmes</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
        </ul>        
        <div className="direita">
          <div className="links">
            <Link to="/Login">login</Link><p>|</p>
            <Link to="/Cadastro">Cadastre-se</Link>
          </div>
          <div className='busca'>
            <input type='search' /><div className='lupa'><BiSearch /></div>
          </div> 
        </div>
      </div>
    </Estilomenu>
  )
}

export default Menu;