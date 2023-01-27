import EstiloMinicard from "./style";

function Minicard(props){
  return (
    <EstiloMinicard>
      <div className="imagem">
        <img src={props.src}></img>
      </div>
      <div className="titulo"><h2>{props.titulo}</h2></div>
      <div className="info"><i className="fa-light fa-info"></i></div>
      <div className="editar"><i className="fa-solid fa-pencil"></i></div>
      <div className="excluir" onClick={props.delete}><i className="fa-solid fa-trash-can"></i></div>
    </EstiloMinicard>
  )
}

export default Minicard;