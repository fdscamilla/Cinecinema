import Estilomenu from './style'
import { BiSearch } from 'react-icons/bi'

function Menu(props){
  return(
    <Estilomenu>
      <div className="menu">
        <div className="logo">
          <h3><a href=''>CineCinema</a></h3>
        </div>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Cinemas</a></li>
          <li><a href="">Filmes</a></li>
        </ul>
        <div className="direita">
          <div className="links">
            <a href="">login</a><p>|</p>
            <a href="">Cadastre-se</a>
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