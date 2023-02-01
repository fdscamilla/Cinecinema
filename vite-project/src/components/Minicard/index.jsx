import EstiloMinicard from "./style"
import { Link } from "react-router-dom";

function Minicard(props){
  return (
    <EstiloMinicard>
      <div className="imagem">
        <img src={props.src}></img>
      </div>
      <div className="titulo"><h2>{props.titulo}</h2></div>
      <div className="info"><i className="fa-light fa-info"></i></div>
      <Link to={props.to} className="editar"><i className="fa-solid fa-pencil"></i></Link>
      <div className="excluir" onClick={props.delete}><i className="fa-solid fa-trash-can"></i></div>
    </EstiloMinicard>
  )
}

export default Minicard;