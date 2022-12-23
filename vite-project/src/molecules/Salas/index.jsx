import Scrumbs from "../../components/scrumbs";

function Salas(props){
  return(
    <div>
      <div className="sala">
        <h3>Sala 1</h3>
      </div>
      <div className="scrumbs">
        <Scrumbs />
        <Scrumbs />
      </div>
      <div className="hora">
        <h4>13:40</h4>
      </div>
    </div>
  )
}

export default Salas;