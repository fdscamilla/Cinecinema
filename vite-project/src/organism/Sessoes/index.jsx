import Cards from '../../components/cards'
import Salas from '../../molecules/Salas';

function Sessoes(props){
  return(
    <div>
      <div className="cinema-data">
        <h4>Selecione o cinema</h4>
        <h3>Kinoplex RioSul</h3>
        <div className="datas">
          <div className="hoje">
            <h3>Hoje</h3>
            <h2>21/12</h2>
            <h3>Hoje</h3>
            <h2>21/12</h2>
            <h3>Hoje</h3>
            <h2>21/12</h2>
            <h3>Hoje</h3>
            <h2>21/12</h2>
            <h3>Hoje</h3>
            <h2>21/12</h2>
            <h3>Hoje</h3>
            <h2>21/12</h2>
            <h3>Hoje</h3>
            <h2>21/12</h2>
          </div>
        </div>
      </div>
      <div className="filmeEscolhido">
        <Cards />
      </div>
      <div className="cardsFilmes">
        <Cards />
      </div>
      <div className="salas">
        <Salas />
        <Salas />
        <Salas />
        <Salas />
        <Salas />
        <Salas />
        <Salas />
        <Salas />
      </div>
    </div>
  )
}

export default Sessoes;