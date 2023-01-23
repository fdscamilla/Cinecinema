import React, {useEffect, useState} from 'react'
import Cardblog from "../../molecules/CardBlog"
import Estilocardsblog from "./style";
import axios from 'axios';

function Cardsblog(){

  let artigos = Get('blog');

    return(
      <Estilocardsblog>
        <div className="cards">
          {artigos.map((slide, key)=>{
            return(
              <div>
                <Cardblog key={key} titulo={slide.titulo} texto={slide.descricao} nome={slide.author} time={slide.date}/>
              </div>
            )                
          })}
        </div>
      </Estilocardsblog>
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

export default Cardsblog;