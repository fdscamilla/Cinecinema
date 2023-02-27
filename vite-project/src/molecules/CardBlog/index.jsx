import { Link } from "react-router-dom";
import Estilocardblog from "./style";

function Cardblog(props){
  return(
    <Estilocardblog>
      <Link className="link" to={props.to}>
        <div className="cardBlog">
          <div className="imagem">
            <img src={props.src}></img>
          </div>
          <div className="sub">
            <div className="description">
              <p>{props.description}</p>
            </div>
            <div className="texto">
              <h2>{props.titulo}</h2>
            </div>
            <div className="autor">
              <div className="textos">
                <h3>{props.nome}</h3>
                <p>{props.time}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Estilocardblog>
    
  )
}

export default Cardblog;