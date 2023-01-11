import Scrumbs from "../../molecules/scrumbs";
import Estilosalas from "./style";

function Salas(props){
  return(
    <Estilosalas>
      <div className="salaCinema">
        <div className="sala">
          <h3>Sala 1</h3>
        </div>
        <div className="scrumbs">
          <Scrumbs classe={props.classe} tipo={props.tipo}/>
          <Scrumbs classe={props.classe} tipo={props.tipo}/>
        </div>
        <div className="hora">
          <h4>13:40</h4>
        </div>
      </div>
    </Estilosalas>
    
  )
}

export default Salas;