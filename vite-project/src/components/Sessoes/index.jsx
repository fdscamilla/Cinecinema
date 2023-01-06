import React, {useEffect, useState} from 'react';
import Cards from '../../molecules/cards';
import Salas from '../Salas';
import Data from '../../molecules/Data';
import Estilosessoes from './style';
import axios from 'axios';

function Sessoes(props){
  let filmes = Get('filmes');
  const weekday = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
  const month = ["01","02","03","04","05","06","07","08","09","10","11","12"];
  const d = new Date();
  let day = d.getDate()
  
  
    return(
      <Estilosessoes>
        <div className="cinema-data">
          <div className='esquerda'>
            <h4>Selecione o cinema</h4>
            <h3>Kinoplex RioSul</h3>
          </div>
          <div className="datas">
            <div className="hoje">
              <Data diaSemana='Hoje' diaMes={`${day}/${month[d.getMonth()]}`}/>
              <Data diaSemana={weekday[d.getDay()+1]} diaMes={`${day + 1}/${month[d.getMonth()]}`}/>
              <Data diaSemana={weekday[d.getDay()+2]} diaMes={`${day + 2}/${month[d.getMonth()]}`}/>
              <Data diaSemana={weekday[d.getDay()+3]} diaMes={`${day + 3}/${month[d.getMonth()]}`}/>
              <Data diaSemana={weekday[d.getDay()+4]} diaMes={`${day + 4}/${month[d.getMonth()]}`}/>
              <Data diaSemana={weekday[d.getDay()+5]} diaMes={`${day + 5}/${month[d.getMonth()]}`}/>
              <Data diaSemana={weekday[d.getDay()+6]} diaMes={`${day + 6}/${month[d.getMonth()]}`}/>
            </div>
          </div>
        </div>
        <div className='filmes'>
          <div className="filmeEscolhido">
            <Cards />
          </div>
          <div className='cardSala'>
            <div className="cardsFilmes">
              {filmes.map((slide, key)=>{
                  return(
                    <div>
                      <Cards key={key} src={slide.cartaz}/>
                    </div>
                    
                  )                
                })}
            </div>
            <div className="salas">
              {filmes.map((slide, key)=>{
                    return(
                      <div>
                        <Salas key={key} tipo={slide.indicacao}/>
                      </div>
                      
                    )                
                  })}
            </div>
          </div>
          
        </div>
      </Estilosessoes>
    )
}

function Get(endpoint){
  const [filmes, setFilmes] = useState([])
  let url = `https://api-cinema-a8oa.onrender.com/${endpoint}`

  useEffect(()=> {
    axios
    .get(url)
    .then((resposta) => setFilmes(resposta.data))
    .catch((erro) => console.log(erro));
  }, [])

  return(filmes)
}

export default Sessoes;