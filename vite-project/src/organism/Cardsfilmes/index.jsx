import EstiloCardsFilmes from "./style";

function Cardsfilmes(props){
  return (
    <EstiloCardsFilmes>
      {props.children}
    </EstiloCardsFilmes>
  )
}

export default Cardsfilmes;