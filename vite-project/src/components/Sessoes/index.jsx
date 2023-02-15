import React, {useEffect, useState, useContext} from 'react';
import Cards from '../../molecules/cards';
import Salas from '../Salas';
import Data from '../../molecules/Data';
import Estilosessoes from './style';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { AuthContext } from '../../../src/Contexts/AuthContext';



function Sessoes(props){
  const {setAuth, authenticate} = useContext(AuthContext)
  let filmes = Get('filmes');
  let sessaoCinema = Get(`sessoes`);
  const weekday = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
  const month = ["01","02","03","04","05","06","07","08","09","10","11","12"];
  const d = new Date();
  const [cartaz, setCartaz] = useState("https://raw.githubusercontent.com/Diego-Fernando-Reis/json-server/master/img/viagem%20a%20lua.jpg");
  const [diadaSessao, setDiaSessao] = useState("23/01");
  const [filmeSessao, setFilmeSessao] = useState("Viagem à Lua");
    return(
      <Estilosessoes>
        <div className="cinema-data">
          <div className='esquerda'>
            <h4>Selecione o cinema</h4>
            <h3>Kinoplex RioSul</h3>
          </div>
          <div className="datas">
            <div className="hoje">
              <Data diaSemana='Hoje' diaMes={'23/01'} onclick={()=>setDiaSessao(
                "23/01"
              )}/>
              <Data diaSemana={weekday[2]} diaMes={'24/01'} onclick={()=>setDiaSessao(
                "24/01"
              )}/>
              <Data diaSemana={weekday[3]} diaMes={'25/01'} onclick={()=>setDiaSessao(
                "25/01"
              )}/>
              <Data diaSemana={weekday[4]} diaMes={'26/01'} onclick={()=>setDiaSessao(
                "26/01"
              )}/>
              <Data diaSemana={weekday[5]} diaMes={'27/01'} onclick={()=>setDiaSessao(
                "27/01"
              )}/>
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
                    <div className='cards'>
                      <Cards key={key} src={slide.cartaz} onclick={()=>{setCartaz(slide.cartaz), setFilmeSessao(slide.filme)}}/>
                    </div>
                  )                
                })}
            </div>
            <div className="salas" id='salas'>
              {
                sessaoCinema.map((slide, key)=>{
                  if(slide.dia == diadaSessao && slide.filme == filmeSessao){
                    return(
                      <Link to={authenticate == true ? "/Dashboard" : "/Login"}><Salas key={key} sala={slide.sala} filme={slide.filme} data={slide.dia} hora={slide.hora} /></Link>
                    )
                  }
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