function Horario(props){
  return (
    <div className={props.classe}>
      <h3>{props.hora}</h3>
    </div>
  )
}

export default Horario;