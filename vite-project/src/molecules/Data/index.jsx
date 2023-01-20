function Data(props){
 return(
  <div className="data" onClick={props.onclick}>
   <h3>{props.diaSemana}</h3>
   <h2>{props.diaMes}</h2>
  </div>
 )
}

export default Data;