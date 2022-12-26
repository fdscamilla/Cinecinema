import React, {useState, useEffect} from 'react';
import Cards from '../../molecules/cards';
import Salas from '../Salas';
import Data from '../../molecules/Data';
import Estilosessoes from '../../molecules/Data/style';
import axios from 'axios';

function Sessoes(props){

  const [filmes, setFilmes] = useState([])

  useEffect(()=> {
    axios
    .get("https://api-cinema-a8oa.onrender.com/filmes")
    .then((resposta) => setFilmes(resposta.data))
    .catch((erro) => console.log(erro));
  }, [])

  return(
    <Estilosessoes>
      {filmes.map(
        x => console.log(x)
      )}
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