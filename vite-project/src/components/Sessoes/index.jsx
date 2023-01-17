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
  let day = d.getDate();
  const [cartaz, setCartaz] = useState("https://raw.githubusercontent.com/Diego-Fernando-Reis/json-server/master/img/viagem%20a%20lua.jpg");

    return(
      <Estilosessoes>
        <div className="cinema-data">
          <div className='esquerda'>
            <h4>Selecione o cinema</h4>
            <h3>Kinoplex RioSul</h3>
          </div>
          <div className="datas">
            <div className="hoje">
              <Data diaSemana='Hoje' diaMes={'23/01'}/>
              <Data diaSemana={weekday[2]} diaMes={'24/01'}/>
              <Data diaSemana={weekday[3]} diaMes={'25/01'}/>
              <Data diaSemana={weekday[4]} diaMes={'26/01'}/>
              <Data diaSemana={weekday[5]} diaMes={'27/01'}/>
            </div>
          </div>
        </div>
        <div className='filmes'>
          <div className="filmeEscolhido">
            <Cards src={cartaz}/>
          </div>
          <div className='cardSala'>
            <div className="cardsFilmes">
              {filmes.map((slide, key)=>{
                  return(
                    <div>
                      <Cards key={key} src={slide.cartaz} onclick={()=>setCartaz(
                        slide.cartaz
                      )}/>
                    </div>
                    
                  )                
                })}
            </div>
            <div className="salas">
              {
                filmes.map((slide, key)=>{
                  if(slide.id == 1){
                    console.log(slide.date[0].sala1)
                  }
                  for(let i = 0; i<slide.date[0].length; i++){
                    for(let i = 0; i<slide.date[0][i].length; i++){

                    }
                  }

                  return(
                    <div>
                      <Salas key={key} tipo={slide.indicacao}/>
                    </div>
                  )                
                })
                }
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