import EstiloFooter from './style'

function Footer(props){
  return(
    <EstiloFooter>
      <div>
      <div className="sob">
      <div className="logo"></div>
      <nav>
        <ul>
          <h4>Ingressos</h4>
          <li><a href="">Onde comprar</a></li>
          <li><a href="">Preços</a></li>
          <li><a href=""></a></li>
        </ul>
        <ul>
          <h4>Filmes</h4>
          <li><a href="">Em cartaz</a></li>
          <li><a href="">Pré-venda</a></li>
          <li><a href="">Promoção</a></li>
        </ul>
        <ul>
          <h4>Cinemas</h4>
          <li><a href="">Encontre seu cinema</a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
        </ul>
      </nav>
      </div>
      <div className="sub">
        <p>© 2022 CineCinema. Todos os Direitos Reservados.</p>
      </div>
    </div>
    </EstiloFooter>
  )
}

export default Footer;