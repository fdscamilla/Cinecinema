import { Link } from "react-router-dom";
import Estilocardblog from "./style";

function Cardblog(props){
  return(
    <Estilocardblog>
      <Link to={props.to}>
        <div className="cardBlog">
          <div className="imagem"></div>
          <div className="description">
            <p>{props.description}</p>
          </div>
          <div className="texto">
            <h2>{props.titulo}</h2>
            <p>{props.texto}</p>
          </div>
          <div className="autor">
            <div className="imagem"></div>
            <div className="textos">
              <h3>{props.nome}</h3>
              <p>{props.time}</p>
            </div>
          </div>
        </div>
      </Link>
    </Estilocardblog>
    
  )
}

export default Cardblog;