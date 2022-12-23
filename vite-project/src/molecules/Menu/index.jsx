import Estilomenu from './style'

function Menu(props){
  return(
    <Estilomenu>
      <div className="menu">
        <div className="logo"></div>
        <ul>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
        </ul>
        <div className="direita">
          <div className="links">
            <a href="">login</a>
            <a href="">Cadastre-se</a>
          </div>
          <input type='search' />
        </div>
      </div>
    </Estilomenu>
  )
}

export default Menu;