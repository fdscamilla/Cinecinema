import EstiloCards from "./style";

function Cards(props){
  return(
    <EstiloCards className="card">
      <img src={props.src} onClick={props.onclick}></img>
    </EstiloCards>
  )
}

export default Cards;