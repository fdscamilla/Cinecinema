function Dadosdoautor(props){
  return(
    <div className="dados">
      <div className="imagem">
        <img src={props.src}></img>
      </div>
      <div className="texto">
        <h4>{props.autor}</h4>
        <p>{props.time}</p>
      </div>
    </div>
  )
}

export default Dadosdoautor;