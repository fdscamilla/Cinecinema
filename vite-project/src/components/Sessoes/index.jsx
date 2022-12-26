import Cards from '../../molecules/cards'
import Salas from '../Salas';
import Data from '../../molecules/Data'
import Estilosessoes from '../../molecules/Data/style';

function Sessoes(props){
  return(
    <Estilosessoes>
      <div className="cinema-data">
        <div className='esquerda'>
          <h4>Selecione o cinema</h4>
          <h3>Kinoplex RioSul</h3>
        </div>
        <div className="datas">
          <div className="hoje">
            <Data diaSemana='Hoje' diaMes='23/12'/>
            <Data diaSemana='Hoje' diaMes='23/12'/>
            <Data diaSemana='Hoje' diaMes='23/12'/>
            <Data diaSemana='Hoje' diaMes='23/12'/>
            <Data diaSemana='Hoje' diaMes='23/12'/>
            <Data diaSemana='Hoje' diaMes='23/12'/>
            <Data diaSemana='Hoje' diaMes='23/12'/>
          </div>
        </div>
      </div>
      <div className='filmes'>
        <div className="filmeEscolhido">
          <Cards />
        </div>
        <div className='cardSala'>
          <div className="cardsFilmes">
            <Cards />
            <Cards />
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
        
      </div>
      
    </Estilosessoes>
  )
}

export default Sessoes;